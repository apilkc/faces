import{SVG_NS,downloadText}from'../../src/drawing-engine.js';
import{street,renderStreet,validateStreet,projectPoint}from'../../roads/src/street-engine.js';
import{mobility,renderMobility}from'../../mobility/src/mobility-engine.js';
export const LAYERS=['terrain','road','drainage','buildings','vegetation','utilities','mobility','people','commercial','details','annotations'];
const ratioSize=ratio=>({landscape:[960,600],square:[720,720],portrait:[600,840],'16:9':[960,540],'4:3':[840,630],A4:[720,1018]}[ratio]||[960,600]);
const typologyFor=p=>p.context.includes('bazaar')?'Nepali bazaar':p.context.includes('rural')?'Rural paved road':p.context.includes('mountain')?'Mountain road':p.context.includes('hill')?'Hill bazaar':p.context.includes('semi')?'Nepali semi-urban corridor':p.context.includes('historic')?'Historic lane':p.context.includes('dense')?'Nepali commercial street':'Nepali residential street';
const mapLayer={terrain:['terrain'],road:['roadway','curbs','walking','cycling','median','crossings'],drainage:['drainage'],buildings:['buildings'],vegetation:['vegetation'],utilities:['utilities'],mobility:['mobility'],people:['people'],commercial:[],details:['furniture'],annotations:['annotations']};
export function generateScene(seed,parameters,index=0,locks={},previous=null){
 const p={...parameters},[W,H]=ratioSize(p.ratio||'landscape'),keep=previous?.world?.street,typology=typologyFor(p);
 const view=p.topography==='flat'?(p.density>72?'elevated':'street level'):p.context.includes('mountain')?'elevated':'street level';
 const worldStreet=locks.road&&keep?keep:street(`${seed}-world`,index,{typology,view,density:p.density>70?'high':p.density<35?'low':'medium'});
 worldStreet.config.grade=p.context.includes('mountain') ? 0.075 : (p.context.includes('hill')||p.topography.includes('slope')) ? 0.045 : 0;
 worldStreet.camera.groundModel=worldStreet.config;
 const vehicleCount=Math.max(1,Math.round(p.mobility/28)),lanes=worldStreet.bands.filter(b=>b.type.includes('lane'));
 const vehicles=Array.from({length:vehicleCount},(_,i)=>{const band=lanes[i%lanes.length],asset=mobility(`${seed}-mobility-${i}`,i+2,{family:i%4===0?'motorcycle':i%4===3?'public transport':'car',view:'three-quarter front',lod:i>1?1:2});return{asset,x:(band.x0+band.x1)/2,y:11+i*13,heading:band.direction<0?180:0}});
 return{id:`SCENE-${String(index+1).padStart(3,'0')}`,seed,parameters:p,size:{W,H},renderQuality:'preview',world:{street:worldStreet,groundModel:worldStreet.config,semanticZones:worldStreet.bands,vehicles},assets:{road:worldStreet,buildings:[],trees:[],people:[],vehicles},locks:{...locks},coherence:{singleCamera:true,grounded:true,fullBodyPeople:true,depthSorted:true,semanticPlacement:true,validation:validateStreet(worldStreet)}}
}
function applyVisibility(svg,hidden,opacity){for(const[layer,ids]of Object.entries(mapLayer))for(const id of ids){const alpha=hidden.includes(layer)?0:opacity[layer]??1;svg=svg.replace(`<g id="${id}">`,`<g id="${id}" opacity="${alpha}">`)}return svg}
export function renderScene(scene,{paper=true,hidden=[],opacity={},label=false,debug=false,renderQuality='preview'}={}){
 const{W,H}=scene.size,d=scene.world.street;let base=renderStreet(d,{paper:false,label:false,clean:renderQuality==='export',debug}).replace(/^<svg[^>]*>|<\/svg>$/g,'').replace(/<g id="mobility">[\s\S]*?<\/g>/,'<g id="mobility"></g>');
 const vehicleMarks=scene.world.vehicles.map(({asset,x,y})=>{const foot=projectPoint({x,y,z:0},d.camera),top=projectPoint({x,y,z:asset.dimensions.height},d.camera),h=Math.abs(foot.y-top.y),s=h/250,marks=renderMobility(asset,{lod:asset.lod}).replace(/^<svg[^>]*>|<\/svg>$/g,'').replace(/<rect[^>]*\/>/,'').replace('<g id="mobility">','<g>');return`<g data-vehicle="${asset.geometryType}" transform="translate(${foot.x-180*s} ${foot.y-205*s}) scale(${s})">${marks}</g>`}).join('');
 base=base.replace('<g id="mobility"></g>',`<g id="mobility">${vehicleMarks}</g>`);const scale=Math.min(W/520,H/320)*.94,x=(W-520*scale)/2,y=(H-320*scale)/2,content=applyVisibility(base,hidden,opacity);
 const debugMarks=debug?`<g id="perspective-debug"><line x1="0" y1="${H*.45}" x2="${W}" y2="${H*.45}" stroke="#a44" stroke-width=".5" stroke-dasharray="4 4"/><circle cx="${W*.5}" cy="${H*.45}" r="3" fill="#a44"/></g>`:'';
 return`<svg xmlns="${SVG_NS}" viewBox="0 0 ${W} ${H}"><rect width="100%" height="100%" fill="${paper?'#eee9dc':'transparent'}"/><g transform="translate(${x} ${y}) scale(${scale})">${content}</g>${debugMarks}${label?`<text x="18" y="${H-18}" font-family="monospace" font-size="11" fill="#282a29">${scene.id} · ${scene.parameters.context} · ${scene.parameters.pattern}</text>`:''}</svg>`
}
export function sceneSimilarity(a,b){const pa=a.parameters,pb=b.parameters;return['context','pattern','topography','roadSurface'].filter(k=>pa[k]===pb[k]).length*.2+Math.max(0,1-Math.abs(pa.density-pb.density)/100)*.2}
export{downloadText};

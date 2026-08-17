import{building,renderBuilding}from'../../buildings/src/app.js';import{tree,renderTree}from'../../trees/src/app.js';import{character,portrait}from'../../src/app.js';import{mobility,renderMobility}from'../../mobility/src/app.js';import{road,renderRoad}from'../../roads/src/app.js';
const inner=svg=>svg.replace(/^<svg[^>]*>|<\/svg>$/g,'').replace(/<rect[^>]*\/>/,'');
export const adapters={
 road:{generate:(seed,p,i)=>road(seed,i,{context:p.context}),render:(asset)=>inner(renderRoad(asset))},
 building:{generate:(seed,p,i)=>building(seed,p.context.includes('rural')?160+i:p.context.includes('semi')||p.context.includes('reconstruction')?80+i:i,{context:p.context.includes('rural')||p.context.includes('mountain')?'rural':p.context.includes('semi')||p.context.includes('reconstruction')?'semiUrban':'urban'}),render:a=>inner(renderBuilding(a))},
 tree:{generate:(seed,p,i)=>tree(seed,i,{ecology:p.geography==='Terai'?'Terai':p.geography?.includes('hill')?'Mid-Hill':p.geography==='mountain'?'Mountain':p.context.includes('urban')?'urban planted':'rural agricultural',lod:i===0&&p.vegetation<55?2:i<3?1:0}),render:(a,o={})=>inner(renderTree(a,o))},
 person:{generate:(seed,p,i)=>character(seed,i),render:a=>inner(portrait(a))},
 mobility:{generate:(seed,p,i)=>mobility(seed,i),render:a=>inner(renderMobility(a))}
};

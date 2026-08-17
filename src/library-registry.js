export const SKETCH_LIBRARY={
  name:'Nepal Sketch Library',
  engine:'Nepal Sketch Engine',
  modules:[
    {id:'people',label:'People',status:'available',route:'./',collections:['men','women','age','occupations']},
    {id:'vegetation',label:'Vegetation',status:'available',route:'trees/',collections:['250 trees','50 groups','50 shrubs / hedges','30 architectural symbols','30 ground elements']},
    {id:'buildings',label:'Buildings',status:'available',route:'buildings/',collections:['urban','semi-urban','rural']},
    {id:'roads-streetscape',label:'Roads + Streetscape',status:'available',route:'roads/',collections:['roads','footpaths','drainage','sidewalks','retaining walls','utility poles','streetlights','signs','benches','stalls','construction','street edges','junction geometry']},
    {id:'mobility',label:'Mobility',status:'available',route:'mobility/',collections:['walking','bicycles','motorcycles + scooters','cars + taxis','tempos / three-wheelers','microbuses','buses','school transport','trucks','pickups','tractors','construction vehicles','emergency vehicles','rural mobility','freight / goods movement','traffic compositions']},
    {id:'scenes',label:'Scenes',status:'available',route:'scenes/',collections:['urban neighborhood','peri-urban corridor','bazaar','rural settlement','mountain road','Terai settlement']}
  ]
};

export const availableModules=()=>SKETCH_LIBRARY.modules.filter(module=>module.status!=='planned');
export const moduleById=id=>SKETCH_LIBRARY.modules.find(module=>module.id===id);

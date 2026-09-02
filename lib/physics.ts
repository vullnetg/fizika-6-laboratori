export const lengthFromRuler=(start:number,end:number)=>Math.max(0,end-start);
export const displacedVolume=(initial:number,final:number)=>Math.max(0,final-initial);
export const density=(mass:number,volume:number)=>volume>0?mass/volume:0;
export const average=(values:number[])=>values.length?values.reduce((s,v)=>s+v,0)/values.length:0;
export const round=(value:number,decimals=2)=>Number(value.toFixed(decimals));
export const closestMaterial=(value:number)=>[{name:"Dru",density:.7},{name:"Plastikë",density:1.1},{name:"Alumin",density:2.7},{name:"Hekur",density:7.8}].reduce((a,b)=>Math.abs(b.density-value)<Math.abs(a.density-value)?b:a);

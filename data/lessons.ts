import type{LessonDefinition,LessonSlug}from"@/components/physics/types";
export const lessons:LessonDefinition[]=[
{slug:"forma",number:"2.1",title:"Forma e trupave",shortTitle:"Forma",zone:1,zoneTitle:"Vëzhgo",icon:"◒",instrument:"Sirtari i objekteve",accent:"#70e7d2",description:"Zbulo çfarë ruan formën dhe çfarë e merr formën e enës."},
{slug:"madhesite",number:"2.2",title:"Madhësitë fizike",shortTitle:"Madhësitë",zone:2,zoneTitle:"Mat",icon:"◇",instrument:"Etiketat matëse",accent:"#69b7ff",description:"Përshkruaj një objekt me numra dhe njësi."},
{slug:"gjatesia",number:"2.2.1",title:"Gjatësia e trupit",shortTitle:"Gjatësia",zone:2,zoneTitle:"Mat",icon:"↔",instrument:"Vizorja",accent:"#ffd166",description:"Vendos vizoren saktë dhe lexo gjatësinë."},
{slug:"siperfaqja",number:"2.2.2",title:"Sipërfaqja e trupit",shortTitle:"Sipërfaqja",zone:2,zoneTitle:"Mat",icon:"▦",instrument:"Rrjeta e sipërfaqes",accent:"#ff9f6e",description:"Numëro katrorët dhe projekto drejtkëndësha."},
{slug:"vellimi",number:"2.3",title:"Vëllimi i trupave",shortTitle:"Vëllimi",zone:3,zoneTitle:"Mas hapësirën dhe kohën",icon:"◫",instrument:"Cilindri matës",accent:"#4cc9f0",description:"Mat hapësirën që zë një trup me ujë."},
{slug:"koha",number:"2.4",title:"Matja e kohës",shortTitle:"Koha",zone:3,zoneTitle:"Mas hapësirën dhe kohën",icon:"◷",instrument:"Kronometri",accent:"#b794f6",description:"Testo reagimin tënd dhe krahaso matjet."},
{slug:"masa",number:"2.5",title:"Masa e trupit",shortTitle:"Masa",zone:4,zoneTitle:"Peshon",icon:"●",instrument:"Mostrat e masës",accent:"#f78fb3",description:"Ndaje madhësinë e një objekti nga masa e tij."},
{slug:"peshorja",number:"2.5.1",title:"Matja me peshore",shortTitle:"Peshorja",zone:4,zoneTitle:"Peshon",icon:"⚖",instrument:"Peshorja",accent:"#f6bd60",description:"Zeroje peshoren dhe balanco masat."},
{slug:"densiteti",number:"2.6",title:"Densiteti i trupave",shortTitle:"Densiteti",zone:5,zoneTitle:"Zbulo materialin",icon:"∷",instrument:"Analiza e densitetit",accent:"#9be564",description:"Zbulo sa masë është grumbulluar në një vëllim."},
{slug:"gabimet",number:"2.7",title:"Gabimet e matjeve",shortTitle:"Gabimet",zone:6,zoneTitle:"Mendo si shkencëtar",icon:"⌕",instrument:"Lupa e detektivit",accent:"#ff7b7b",description:"Gjej problemet e fshehura në matje."},
{slug:"mesatarja",number:"2.7.1",title:"Vlera mesatare",shortTitle:"Mesatarja",zone:6,zoneTitle:"Mendo si shkencëtar",icon:"▥",instrument:"Tabela e të dhënave",accent:"#82c8ff",description:"Përdor disa matje për një rezultat më të besueshëm."}];
export const lessonBySlug=Object.fromEntries(lessons.map(x=>[x.slug,x]))as Record<LessonSlug,LessonDefinition>;
export const zones=Array.from(new Set(lessons.map(x=>x.zone))).map(zone=>({zone,title:lessons.find(x=>x.zone===zone)!.zoneTitle,lessons:lessons.filter(x=>x.zone===zone)}));
export const nextLesson=(slug:LessonSlug):LessonSlug|"finale"=>{const i=lessons.findIndex(x=>x.slug===slug);return i===lessons.length-1?"finale":lessons[i+1].slug};

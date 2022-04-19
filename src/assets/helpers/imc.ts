export type Lvels={
    title: string;
    color:string;
    icon: 'down' | 'up';
    imcMin:number;
    imcMax:number;
    yourImc?:number;
}

export const levels: Array<Lvels>=[
    { title:'Magreza', color:'#96a3ab', icon:'down', imcMin:0, imcMax:18.5 },
    { title:'Normal', color:'#0ead69', icon:'up', imcMin:18.6, imcMax:24.9},
    { title:'sobrepeso', color:'#e2b039', icon:'down', imcMin:25 , imcMax: 30},
    { title:'Obesidade', color:'#c3423f', icon:'down', imcMin:30.1, imcMax: 99 }
];


export const calculateImc =(height:number, weight:number):Lvels |null=>{
    const imc = weight / (height * height);

    for(let level of levels){
        if(imc <= level.imcMax){
            let levelCopy:Lvels ={...level}
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }
    return null;
}
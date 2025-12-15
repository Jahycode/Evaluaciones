export abstract class FiguraGeometrica{
    constructor(){}
    abstract calcularPerimetro():number
}

export class Circulo extends FiguraGeometrica{
    radio:number
    constructor(radio:number){
        super();
        this.radio = radio
    }
    override calcularPerimetro():number{
        return Math.PI * (this.radio * this.radio)
    }
}

export class TrianguloEscaleno extends FiguraGeometrica{
    ladoA:number
    ladoB:number
    ladoC:number
    constructor(ladoA:number,ladoB:number,ladoC:number){
        super();
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }
    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}

export class TrianguloEquilatero extends FiguraGeometrica{
    lado:number
    constructor(lado:number){
        super()
        this.lado = lado
    }
    override calcularPerimetro(): number {
        return this.lado * 3
    }
}
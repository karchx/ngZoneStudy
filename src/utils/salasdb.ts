export interface ISalas {
	id: number;
	name:string;
	time:string;
	participantes:number;
}

export interface ITemas {
	id: number;
	idsala: number;
	tema: Array<string>;
}

export const salas: Array<ISalas>= [];

export const temas: Array<ITemas> = [];

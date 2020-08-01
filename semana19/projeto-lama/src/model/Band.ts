export class Band {
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ) {}

    public getId = () => this.id;
    public getName = () => this.name;
    public getMusicGenre = () => this.music_genre;
    public getResponsible = () => this.responsible;

    public setId = (id: string) => this.id = id;
    public setName = (name: string) => this.name = name;

    public static toBandModel(band: any): Band {
        return new Band(band.id, band.name, band.music_genre, band.responsible)
    };
};

export interface RegisterBandDTO {
    name: string,
    music_genre: string,
    responsible: string
};

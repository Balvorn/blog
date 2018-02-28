import * as moment from 'moment';
export class Article {
    id:number;
    titre:string;
    auteur:string;
    date:moment.Moment;
    description:string;
    constructor(id:number,titre:string,description?:string,auteur:string = "Jeremy"){
        this.date = moment();
        this.auteur = auteur;
        this.description = description;
        this.id = id;
        this.titre = titre
    }
}

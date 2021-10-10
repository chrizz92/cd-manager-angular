import { Injectable } from '@angular/core';
import { Cd } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCds(): Cd[] {
    return [{title:'Empire Burlesque', artist:'Bob Dylan', country:'USA',year:1985,price:10.9,company:'Columbia'},{title:'Hide your heart', artist:'Bonnie Tyler', country:'UK',year:1988,price:9.9,company:'CBS Records'},{title:'Greatest Hits', artist:'Dolly Parton', country:'USA',year:1982,price:9.9,company:'RCA'},{title:'Still got the blues', artist:'Gary Moore', country:'UK',year:1990,price:10.2,company:'Virgin'},{title:'Eros', artist:'Eros Ramazzotti', country:'EU',year:1997,price:9.9,company:'Pickwick'},{title:'One night only', artist:'Bee Gees', country:'UK',year:1998,price:10.9,company:'Polydor'},{title:'Sylvias Mother', artist:'Dr.Hook', country:'UK',year:1973,price:8.1,company:'Virgin'},{title:'Maggie May', artist:'Rod Stewart', country:'UK',year:1990,price:8.5,company:'Pickwick'},{title:'Romanza', artist:'Andrea Bocelli', country:'EU',year:1996,price:10.8,company:'Polydor'},{title:'When a man loves a woman', artist:'Percy Sledge', country:'USA',year:1987,price:8.7,company:'Atlantic'},{title:'Black angel', artist:'Savage Rose', country:'EU',year:1995,price:10.9,company:'Pickwick'},{title:'1999 Grammy Nominees', artist:'Many', country:'USA',year:1999,price:10.2,company:'Grammy'},{title:'For the good times', artist:'Kenny Rogers', country:'UK',year:1995,price:8.7,company:'Grammy'},{title:'Big Willie style', artist:'Will Smith', country:'USA',year:1997,price:9.9,company:'Columbia'},{title:'Tupelo Honey', artist:'Van Morrison', country:'UK',year:1971,price:8.2,company:'Polydor'},{title:'Soulsville', artist:'Jorn Hoel', country:'Norway',year:1996,price:7.9,company:'Grammy'},{title:'The very best of', artist:'Cat Stevens', country:'UK',year:1990,price:8.9,company:'Grammy'},{title:'Stop', artist:'Sam Brown', country:'UK',year:1988,price:8.9,company:'Siren'},{title:'Bridge of Spies', artist:'TPau', country:'UK',year:1987,price:7.9,company:'Siren'},{title:'Private Dancer', artist:'Tina Turner', country:'UK',year:1983,price:8.9,company:'Siren'},{title:'Midt om natten', artist:'Kim Larsen', country:'EU',year:1983,price:7.8,company:'EMI'},{title:'Pavarotti Gala Concert', artist:'L. Pavarotti', country:'UK',year:1991,price:9.9,company:'Siren'},{title:'The dock of the bay', artist:'Otis Redding', country:'USA',year:1987,price:7.9,company:'Atlantic'},{title:'Picture book', artist:'Simply Red', country:'EU',year:1985,price:7.2,company:'EMI'},{title:'Red', artist:'The Communards', country:'UK',year:1987,price:7.8,company:'EMI'},{title:'Unchain my heart', artist:'Joe Cocker', country:'USA',year:1987,price:8.2,company:'EMI'}];
  }

}

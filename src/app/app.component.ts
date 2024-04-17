import { Component } from '@angular/core';


interface Pokemon {
  url: string;
  name: string;
  type: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'pokedoku';
  // on va declarer une variable de any qui sera un tableau de pokemon
  pokemons: any = [];
  constructor() {
    console.log('AppComponent constructor called');
  }

  ngOnInit() {


    let link = "https://cdn.discordapp.com/attachments/776543561776365578/1229757729636352010/zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz.png?ex=6630d822&is=661e6322&hm=8ca46a48078501eb8c9a0d450c301a27e4da955e343f897e150ebad7e1bdca80&";
    this.pokemons.push({url: 'https://cdn.discordapp.com/attachments/776543561776365578/1229942677785673788/eazezseaz.png?ex=66318461&is=661f0f61&hm=d3656c2b21eb8b470b78e062d4d5e7d10135c73bf43a8203687eec9476d8f6a9&', name: "Neos' Bakery", type: 'logo'});
    this.pokemons.push({url: link , name: 'ivysaur', type: 'custom'});
    this.pokemons.push({url: link, name: 'venusaur', type: 'custom'});
    this.pokemons.push({url: 'https://cdn.discordapp.com/attachments/776543561776365578/1229768798060544020/845415.png?ex=6630e271&is=661e6d71&hm=9f40aff8b7a9a428f1c7ac57a44c23384cff2a41158d9593f767eb3ca45fc4d2&', name: 'charmander', type: 'custom'});
    this.pokemons.push({url: link, name: 'charmeleon', type: 'custom'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani/kangaskhan-mega.gif', name: 'Mega Kangaskhan', type: 'fire'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani-shiny/hitmonlee.gif', name: 'Hitmonlee', type: 'water'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani-shiny/umbreon.gif', name: 'Umbreon', type: 'water'});
    this.pokemons.push({url: 'https://cdn.discordapp.com/attachments/776543561776365578/1229768798060544020/845415.png?ex=6630e271&is=661e6d71&hm=9f40aff8b7a9a428f1c7ac57a44c23384cff2a41158d9593f767eb3ca45fc4d2&', name: 'blastoise', type: 'custom'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani/crabominable.gif', name: 'Crabominable', type: 'bug'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani-shiny/weavile.gif', name: 'Weavile', type: 'bug'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani-shiny/snorlax.gif', name: 'Snorlax', type: 'bug  '});
    this.pokemons.push({url: link, name: 'blastoise', type: 'custom'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani/gengar.gif', name: 'Gengar', type: 'bug'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani-shiny/jirachi.gif', name: 'Jirachi', type: 'bug'});
    this.pokemons.push({url: 'https://play.pokemonshowdown.com/sprites/ani/darkrai.gif', name: 'Darkrai', type: 'bug'});
    


    console.log('AppComponent ngOnInit called');
  }

  ngOnDestroy() {
    console.log('AppComponent ngOnDestroy called');
  }

  ngOnChanges() {
    console.log('AppComponent ngOnChanges called');
  }

  
}

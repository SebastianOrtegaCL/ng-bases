import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'iron Man';
  public age: number = 45;


  get capitalizedName():string {
    return this.name.toUpperCase();

  }

  getHeroeDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Juan';
  }

  changeAge():void {
    this.age = 25;

  }

  resetForm():void {
    this.name = 'iron Man';
    this.age = 45;
  }

  
}

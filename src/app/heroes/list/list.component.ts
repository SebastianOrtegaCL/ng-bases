import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She hulk', 'Thor'];
  public deletedHero?: string;

  deleteHeroe(): void {
    this.deletedHero = this.heroes.pop();
  }

}

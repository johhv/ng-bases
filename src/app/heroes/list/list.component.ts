import { Component } from '@angular/core';

@Component({
  selector: 'heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroNames = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  deletedHero?: string;
  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}

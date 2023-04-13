import { Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name = 'IronMan';
  age = 45;

  get capitalizeName() {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `
    ${this.name} - ${this.age}
    `;
  }

  changeHero() {
    return (this.name = 'Hulk');
  }

  changeAge() {
    return (this.age = 20);
  }

  resetForm() {
    this.name = 'IronMan';
    this.age = 45;
  }
}

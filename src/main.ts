import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class="container-sm">
    <h1>Hello from {{ name }}!</h1>
    <p>Soy un  parrafo {{ parrafo }} </p>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
</div>
</div>
  `,
})
export class App {
  usuario: User = { name: 'Andres', age: 17 };
  name = isAdult(this.usuario);
  parrafo="Hola";
  x=7;
}

let parrafo:string | undefined;

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'Justine',
  age: 23,
};

let x:number = 3;
if ((1 <= x) && (x<= 3)) {
  // True for *any* value of x!
}

bootstrapApplication(App);

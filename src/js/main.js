import { Anim } from './components/anim'
import { Section } from './components/section'
class App {
  constructor() {
    this.components = [];
  }

  component(component) {
    this.components.push(component);
  }

  boot() {
    this.components.forEach((component) => component.init());
  }
}

const app = new App();
app.component(new Anim());
app.component(new Section());


document.addEventListener("DOMContentLoaded", () => app.boot());
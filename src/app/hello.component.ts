import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
    <h2>Hello world</h2>
    <h3>Your name: {{user.name}}</h3>
    <h3>Your age: {{user.age}}</h3>
  `
})

export class HelloComponent {
  user = {
    name: "Admin",
    age: 30
  }
}

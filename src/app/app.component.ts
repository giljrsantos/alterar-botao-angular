import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonState: boolean = true;

  toggleState() {
    this.buttonState = !this.buttonState;
  }
}

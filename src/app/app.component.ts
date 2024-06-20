import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Choose Color';
  backgroundColor: string = '#ffffff';
  changeColor(event: Event) {
    this.backgroundColor = (event.target as HTMLInputElement).value;
    document.body.style.backgroundColor = this.backgroundColor;
  }
}

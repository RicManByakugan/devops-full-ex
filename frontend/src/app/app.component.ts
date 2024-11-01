import { Component } from '@angular/core';
import { ItemsComponent } from './pages/items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { ContentComponent } from "./content/content/content.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule, HeaderComponent, ContentComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopcart';
}
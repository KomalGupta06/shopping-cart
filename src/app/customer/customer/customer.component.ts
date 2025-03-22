import { Component } from '@angular/core';
import { ItemsComponent } from "../../items/items/items.component";

@Component({
  selector: 'app-customer',
  imports: [ItemsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}

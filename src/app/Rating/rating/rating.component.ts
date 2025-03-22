import { Component } from '@angular/core';
import { CustomerComponent } from "../../customer/customer/customer.component";

@Component({
  selector: 'app-rating',
  imports: [CustomerComponent],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

}

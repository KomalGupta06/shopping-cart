import { Component } from '@angular/core';
import { ProductComponent } from "../../product/product/product.component";
import { FooterComponent } from "../../footer/footer/footer.component";

@Component({
  selector: 'app-content',
  imports: [ProductComponent, FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}

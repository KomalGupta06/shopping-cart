import { Component } from '@angular/core';
import { ProfileComponent } from '../../profile/profile/profile.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [ProfileComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
category: any[]=['Electronics','Fashion','Beauty','Home Improvement','Soft toys and Luggage','Groceries'];

}

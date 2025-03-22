import { Component } from '@angular/core';
import { DetailComponent } from '../../detail/detail/detail.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [DetailComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  showShare = false;
  shareLink = 'https://www.figma.com/file/NIfVhYygR9mAQasassdsada/Share';

  shareIcons = [
    { label: 'Telegram', iconClass: 'lucide lucide-send' },
    { label: 'Twitter', iconClass: 'lucide lucide-twitter' },
    { label: 'Whatsapp', iconClass: 'lucide lucide-phone' },
    { label: 'E-mail', iconClass: 'lucide lucide-mail' },
    { label: 'More', iconClass: 'lucide lucide-more-horizontal' }
  ];

  toggleShare() {
    this.showShare = !this.showShare;
  }

  copyLink() {
    navigator.clipboard.writeText(this.shareLink);
    alert('Link copied!');
  }
}

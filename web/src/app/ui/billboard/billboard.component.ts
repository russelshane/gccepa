import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-billboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billboard.component.html',
})
export class BillboardComponent {
  @Input() heading: string = '';
}

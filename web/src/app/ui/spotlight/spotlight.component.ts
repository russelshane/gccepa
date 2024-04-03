import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spotlight.component.html',
})
export class SpotlightComponent {
  @Input() heading: string = '';
}

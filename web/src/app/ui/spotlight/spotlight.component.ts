import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './spotlight.component.html',
})
export class SpotlightComponent {
  @Input() heading: string = '';
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { experiences } from '../../pages/experiences/experiences.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './spotlight.component.html',
})
export class SpotlightComponent {
  @Input() heading: string = '';
  
  experience = {
    id: experiences[0].id,
    title: experiences[0].title,
    description: experiences[0].description,
    location: experiences[0].location,
    date: experiences[0].date,
    attendance: {
      expected: experiences[0].attendance.expected,
      actual: experiences[0].attendance.actual,
    }
  }
}

import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';

interface Experience {
  id: number;
  title: string;
  description: string;
  location: string;
  attendance: {
    expected: number;
    actual: number | null | undefined;
  };
}

export const experiences: Experience[] = [
  {
    id: 0,
    title: 'CCS Student Orientation for Academic Year 2024',
    description:
      "This year's student orientation event for Gordon College's College of Computer Studies.",
    location: 'Gordon College',
    attendance: {
      expected: 64,
      actual: null,
    },
  },
];

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MastheadComponent, CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './experiences.component.html',
})
export class ExperiencesComponent {
  experiences = experiences;
}

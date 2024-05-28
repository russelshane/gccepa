import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { experiences } from '../experiences/experiences.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MastheadComponent, CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const slug = params['id'];
      console.log('Url Id: ', slug);

      this.experience.title = experiences[slug].title;
      this.experience.description = experiences[slug].description;
      this.experience.location = experiences[slug].location;
      this.experience.attendance.expected =
        experiences[slug].attendance.expected;
    });
  }

  experience = {
    title: '',
    description: '',
    location: '',
    image: '',
    attendance: {
      expected: 0,
      actual: 0,
    },
  };
}

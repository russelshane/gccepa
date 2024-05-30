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
  imageUrl: string,
  date: string; 
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
    imageUrl: "",
    date:"August 8 2024 8:00 AM to 12:00 PM",
    attendance: {
      expected: 64,
      actual: null,
    },
  },

  {
    id: 1,
    title: 'Brigada Eskwela CCS 2024',
    description:
      "Brigada CCS Eskwela is an activity that mobilizes volunteers to help clean, repair, and prepare classrooms and facilities.",
    location: 'CCS Lecture Rooms, Computer Laboratories and Garden',
    imageUrl: "",
    date:"May 28 2024 8:00 AM to 12:00 PM",
    attendance: {
      expected: 167,
      actual: null,
    },
  },

  {
    id: 2,
    title: 'HRM Day Year 2',
    description:
      "Don't miss out on this fantastic opportunity to connect with fellow HR practitioners, gain valuable knowledge, and collaborate. Spread the word and make sure to swing by – we can't wait to welcome you!",
    location: 'Gordon College P.E Hall',
    imageUrl: "",
    date:"May 17 2024 1:00 PM to 7:00 PM",
    attendance: {
      expected: 137,
      actual: null,
    },
  },

  {
    id: 3,
    title: 'Hospitality and Tourism Exposition',
    description:
      "Witness the mesmerizing flow of activities at the much-anticipated 2nd hospital",
    location: 'Marikit Park',
    imageUrl: "https://scontent-mnl1-2.xx.fbcdn.net/v/t1.15752-9/444762604_1008575557370904_3274105383483632738_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHF_7H4f-Zx5Kuqefx3IElc1OiNu8giBHrU6I27yCIEejk9PMfwK3SqRcBbL0DzLApszZxcfH56v0IcgjoDttNv&_nc_ohc=XwmIHzTfrTYQ7kNvgEyEry9&_nc_ht=scontent-mnl1-2.xx&oh=03_Q7cD1QFbMYiMWfdrkDv-ZcOaQJicLEpWOBrCeT9UCi9_JWdnow&oe=667E19E1",
    date:"May 8 - 10 2024 1:00 PM to 7:00 PM",
    attendance: {
      expected: 211,
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

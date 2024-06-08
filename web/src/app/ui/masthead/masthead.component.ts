import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-masthead',
  standalone: true,
  templateUrl: './masthead.component.html',
  imports: [LucideAngularModule, RouterLink],
})
export class MastheadComponent {
  // Controls the navigation menu toggle
  // Must not be showing on page load
  menuActive = false;
  bodyText = 'hello world';

}

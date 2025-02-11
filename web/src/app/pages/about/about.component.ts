import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MastheadComponent } from '../../ui/masthead/masthead.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MastheadComponent, RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {}

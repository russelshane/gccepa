import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';
import { HeroComponent } from '../../ui/hero/hero.component';
import { SearchComponent } from '../../ui/search/search.component';
import { RouterLink } from '@angular/router';
import { SpotlightComponent } from '../../ui/spotlight/spotlight.component';
import { BillboardComponent } from '../../ui/billboard/billboard.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MastheadComponent,
    HeroComponent,
    SearchComponent,
    SpotlightComponent,
    BillboardComponent,
    RouterLink,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}

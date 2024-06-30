import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';
import { HeroComponent } from '../../ui/hero/hero.component';
import { SearchComponent } from '../../ui/search/search.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../ui/footer/footer.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    imports: [
        MastheadComponent,
        HeroComponent,
        SearchComponent,
        RouterLink,
        FooterComponent
    ]
})
export class LandingComponent {}

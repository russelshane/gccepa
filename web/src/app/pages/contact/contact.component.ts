import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MastheadComponent } from '../../ui/masthead/masthead.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,MastheadComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

}

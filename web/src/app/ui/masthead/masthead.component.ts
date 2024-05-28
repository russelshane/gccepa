import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-masthead',
  standalone: true,
  templateUrl: './masthead.component.html',
  imports: [LucideAngularModule, RouterLink, ModalComponent],
})
export class MastheadComponent {
  // Controls the navigation menu toggle
  // Must not be showing on page load
  menuActive = false;
  bodyText = 'hello world';

  constructor(protected modalService: ModalService) {}
}

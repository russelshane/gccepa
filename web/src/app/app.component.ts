import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CrowdPilot: Join and create personalized community experiences';

  constructor(protected modalService: ModalService) {}
}

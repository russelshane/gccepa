import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './user-settings.component.html',
})
export class UserSettingsComponent {

}

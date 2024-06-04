import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-logged-in-user',
  standalone: true,
  imports: [RouterLink,LucideAngularModule,],
  templateUrl: './logged-in-user.component.html',
})
export class LoggedInUserComponent {
  
}

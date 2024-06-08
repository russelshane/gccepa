import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [RouterLink,LucideAngularModule,],
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent {
  
}

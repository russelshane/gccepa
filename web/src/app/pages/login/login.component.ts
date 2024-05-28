import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  // Import 'LucideAngularModule' for Lucide Icons to work
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {}

import { Component } from '@angular/core';
import { HeaderComponent } from "../../../ui/header/header.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {

}

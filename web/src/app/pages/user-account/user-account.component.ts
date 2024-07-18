import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HeaderComponent } from "../../ui/header/header.component";
import { SidebarComponent } from "../../ui/sidebar/sidebar.component";
import { FooterComponent } from "../../ui/footer/footer.component";

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent {
  
}

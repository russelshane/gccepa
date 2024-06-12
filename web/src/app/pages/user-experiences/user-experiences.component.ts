import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from "../../ui/footer/footer.component";

@Component({
    selector: 'app-user-experiences',
    standalone: true,
    templateUrl: './user-experiences.component.html',
    imports: [RouterLink, LucideAngularModule, FooterComponent]
})
export class UserExperiencesComponent {
  
}
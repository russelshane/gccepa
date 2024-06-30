import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from "../../ui/footer/footer.component";
import { SidebarComponent } from "../../ui/sidebar/sidebar.component";
import { HeaderComponent } from "../../ui/header/header.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";
import { PendingComponent } from "./pending/pending.component";
import { RecurringComponent } from "./recurring/recurring.component";
import { PastComponent } from "./past/past.component";
import { CancelledComponent } from "./cancelled/cancelled.component";

@Component({
    selector: 'app-user-experiences',
    standalone: true,
    templateUrl: './user-experiences.component.html',
    imports: [
        CommonModule,
        RouterLink,
        LucideAngularModule,
        FooterComponent,
        SidebarComponent,
        HeaderComponent,
        UpcomingComponent,
        PendingComponent,
        RecurringComponent,
        PastComponent,
        CancelledComponent
    ]
})
export class UserExperiencesComponent {
    currentView: string = 'upcoming';

    showEvents(view: string){
        this.currentView = view;
    }
  
}
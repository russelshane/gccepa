import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { experiences } from '../../pages/experiences/experiences.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-billboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './billboard.component.html',
})
export class BillboardComponent {
  @Input() heading: string = '';

  events:any = experiences.slice(1,4);

  constructor(){
    console.log(this.events)
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  @Input() planTitle:string = '';
  @Input() price:string = '';
  @Input() duration:string = '';
  @Input() includes:string[] = [];
  @Input() benefits:string[] = [];
}

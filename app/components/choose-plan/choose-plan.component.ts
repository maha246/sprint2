import { Component } from '@angular/core';


@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.css']
})
export class ChoosePlanComponent {
  //basic
  basic_includes:string[]=["14 Breakfasts","14 Lunches", "14 Dinners ", "14 Snacks"];
  basic_benefits:string[]=["Build healthier habits",
   "Introduce new recipes into your rotation",
   "Eat AND enjoy the foods you’re preparing",
  "Work towards a lifestyle shift "];
  basic_duaration:string = "2 weeks";
  basic_title:string = "Basic";
  basic_price:string = "$29";

  //premium plan details
  pre_includes:string[]=["14 Breakfasts","14 Lunches", "14 Dinners ", "14 Snacks"];
  pre_benefits:string[]=["Build healthier habits",
   "Introduce new recipes into your rotation",
   "Eat AND enjoy the foods you’re preparing",
  "Work towards a lifestyle shift "];
  pre_duaration:string = "4 weeks";
  pre_title:string = "Premium";
  pre_price:string = "$34";










  
  //stam
  arr1:string[]=["1", "2", "3"];
  arr2:string[]=["10", "20", "30"];
  str1:string = "maha";
  str2:string = "maha";
  str3:string = "maha";


}

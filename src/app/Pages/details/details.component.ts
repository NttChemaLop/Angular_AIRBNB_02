import { Component, OnInit } from '@angular/core';
import { createDefaultFullResponse, FullInfoResponse } from 'src/app/Models/full-info-model';
import { DepartmentstateService } from 'src/app/Services/departmentstate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id: string = '';
  department: FullInfoResponse= createDefaultFullResponse();

  constructor(private route: ActivatedRoute, private departmentStateService : DepartmentstateService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
     
    })
      this.departmentStateService.getDepartments(this.id).subscribe(depart =>{
        this.department=depart;
       this.department.review_scores.review_scores_checkin !=NaN ? this.department.review_scores.review_scores_checkin=
        this.transformReviews(5,this.department.review_scores.review_scores_checkin)
       :'';
       this.department.review_scores.review_scores_accuracy !=NaN ?       this.department.review_scores.review_scores_accuracy=
       this.transformReviews(5,this.department.review_scores.review_scores_accuracy)
       :'';
       this.department.review_scores.review_scores_cleanliness !=NaN ?this.department.review_scores.review_scores_cleanliness=
        this.transformReviews(5,this.department.review_scores.review_scores_cleanliness)
       :'';

       this.department.review_scores.review_scores_communication !=NaN ? this.department.review_scores.review_scores_communication=
        this.transformReviews(5,this.department.review_scores.review_scores_communication)
       :'';
       this.department.review_scores.review_scores_location !=NaN ?        this.department.review_scores.review_scores_location=
         this.transformReviews(5,this.department.review_scores.review_scores_location)
       :'';
       this.department.review_scores.review_scores_value !=NaN ?      this.department.review_scores.review_scores_value=
        this.transformReviews(5,this.department.review_scores.review_scores_value)
       :'';
       this.department.review_scores.review_scores_rating !=NaN ?       this.department.review_scores.review_scores_rating =
         this.transformReviews(5,this.department.review_scores.review_scores_rating/10)
       :'';
        console.log(this.department)});
     
  
  }

  ngOnInit(): void {
  
  }

  transformReviews=(score:number, number:number):number=> number * score/10 ;
  

}

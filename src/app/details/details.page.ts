import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  student_show: Object;

  constructor(private http:HttpClient) { }

 
  ngOnInit() {
    this.http.get("https://depaul.fedena.org/api/students/dps2").subscribe(
      data => this.student_show = data
      
      );
      
  }

}

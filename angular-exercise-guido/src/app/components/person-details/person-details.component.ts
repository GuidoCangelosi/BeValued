import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Person } from '../../interfaces/person';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private service: ApiService){}
  
  selectedPerson: Person = { id: 1, title: 'Mr', forename: 'Barney', surname: 'McGrew', jobtitle: 'Fireman', town: 'Trumpton'};

  ngOnInit(): void {
    var myId = this.route.snapshot.paramMap.get('id');
    //this.route.paramMap.subscribe((params: ParamMap) => { this.id = +params.get('id')});
    let id = Number(myId) || 0;

    this.getPersonById(id);
  }

  getPersonById(id:number) {
    this.service.getPersonById(id).subscribe((data:Person) => this.selectedPerson = data);
  }

}

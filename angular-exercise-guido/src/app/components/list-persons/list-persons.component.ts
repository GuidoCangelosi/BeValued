import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  constructor(private service: ApiService) { }

  persons: Person[] = [];

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons() {
    this.service.getAllPersons().subscribe((data:Person[]) => this.persons = data);
    // this subscription to observable may not be useful in our context - butt I just wanted to illustrate a common practice
    // in the real world data set are usually dynamic and may change in time.
  }

}

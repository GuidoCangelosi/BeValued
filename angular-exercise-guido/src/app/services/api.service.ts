import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Person } from '../interfaces/person';
//import { environment } from '../../environments/environment'

const personList: Person[] = [
  { id: 1, title: 'Mr', forename: 'Barney', surname: 'McGrew', jobtitle: 'Fireman', town: 'Trumpton'},
  { id: 2, title: 'Mr', forename: 'Windy', surname: 'Miller', jobtitle: 'Miller', town: 'Camberwick Green'},
  { id: 3, title: 'Mr', forename: 'Chippy', surname: 'Minton', jobtitle: 'Carpenter', town: 'Trumpton'},
  { id: 4, title: 'Mrs', forename: 'Dora', surname: 'Minton', jobtitle: 'Housewife', town: 'Trumpton'},
  { id: 5, title: 'Mstr', forename: 'Nibs', surname: 'Minton', jobtitle: 'Apprentice', town: 'Trumpton'},
  { id: 6, title: 'Mr', forename: 'Nick', surname: 'Fisher', jobtitle: 'Bill sticker', town: 'Trumpton'},
  { id: 7, title: 'Mr', forename: 'Jonathon', surname: 'Bell', jobtitle: 'Farmer', town: 'Camberwick Green'},
  { id: 8, title: 'Mr', forename: 'Mickey', surname: 'Murphy', jobtitle: 'Baker', town: 'Camberwick Green'},
  { id: 9, title: 'Mr', forename: 'Peter', surname: 'Hazell', jobtitle: 'Postman', town: 'Camberwick Green'},
  { id: 10, title: 'Mr', forename: 'Thomas', surname: 'Tripp', jobtitle: 'Milkman', town: 'Camberwick Green'}
]
const defaultPerson: Person = { id: 1, title: 'Mr', forename: 'Barney', surname: 'McGrew', jobtitle: 'Fireman', town: 'Trumpton'};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) { }

  getAllPersons() : Observable<Person[]> {
    // ideally we should call a web api to supply data from backend - environment will contain the url config
    //return this.client.get<Person[]>(environment.apiUrl + "Person");
    personList.sort((a,b) => a.surname.localeCompare(b.surname) || a.forename.localeCompare(b.forename) );

    return of(personList);
  }
  getPersonById(id: number) : Observable<Person> {
    // ideally we should call a web api to supply data from backend - environment will contain the url config
    //return this.client.get<Person>(environment.apiUrl + "GetPersonById?id=" + id);
    var onePerson = personList.find(o => o.id === id) || defaultPerson;
    return of(onePerson);
  }
}

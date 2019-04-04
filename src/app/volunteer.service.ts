import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }
  postVolunteer(volunteer: any) : Observable<any> {
    //this.http.post<User>(this.rest+'user', user, httpOptions).subscribe(user => console.log(user));
    return this.http.post<any>('http://localhost:8080/rest/post-volunteer-application', volunteer, httpOptions);
  }
  fetchVolunteers(){
    return this.http.get<any[]>('http://localhost:8080/rest/get-volunteer-application');
  }
}

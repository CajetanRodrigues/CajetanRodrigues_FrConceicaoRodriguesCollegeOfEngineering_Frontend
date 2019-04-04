import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../Models/volunteer';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  volunteers : Volunteer[];
  displayedColumns = ['id', 'name', 'age', 'gender','phoneno','email','residential_address','education','recent_education','current_working_details','months_available','day1','day2','day3','time_slot','skill_set','area_comfortable','volunteering_cause','awareness_source','prior_teaching_experience'];
  dataSource : any; 
  
  constructor(private volunteerService : VolunteerService) { }

  ngOnInit() {
    this.volunteerService.fetchVolunteers().subscribe((data : Volunteer[])=>
    {
      this.volunteers = data;
      this.dataSource = new MatTableDataSource<Volunteer>(this.volunteers);
      console.log(data);
    })
  }

}

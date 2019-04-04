
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../Models/volunteer';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent {

  images = [
    'https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2016/01/06054136/teach-for-india.jpg',
    'https://media.glassdoor.com/l/f4/23/01/c4/teach-for-india-fellows.jpg',
    'https://pbs.twimg.com/media/BfFBK8iCcAAkqVF.jpg',
    'http://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2014/03/06101143/YIF.jpg',
    'https://pbs.twimg.com/media/C8adYrZW0AAeytU.jpg'
  ]
  volunteer = new Volunteer();



  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  constructor(
              private  router : Router, private snackBar : MatSnackBar, private route : ActivatedRoute,
         private volunteerService : VolunteerService ) {


  }
  onGender(gender : string){
    this.volunteer.gender = gender;
    console.log(JSON.stringify(this.volunteer.gender));
  }
  onEducation(education : string){
    this.volunteer.education = education;
    console.log(this.volunteer.education);
    
  }
  check(){
    console.log(this.volunteer.time_slot);
  }
  onMonthsAvailable(months : string){
    this.volunteer.months_available = months;
  console.log(this.volunteer.months_available);
  }
  onDay1(day : string)
  {
this.volunteer.day1 = day;
console.log(this.volunteer.day1)
  }
  onDay2(day : string)
  {
this.volunteer.day2 = day;
  }
  onDay3(day : string)
  {
this.volunteer.day3 = day;
  }
  onTimeSlot(timeslot : string){
    this.volunteer.time_slot = timeslot;

  }
  onSkillSet(skillset : string){
this.volunteer.skill_set = skillset;
  }
  onArea(area : string){
    this.volunteer.area_comfortable = area;
    console.log(this.volunteer.area_comfortable);
  }
  awareness_source(src){
    this.volunteer.awareness_source = src
  }
  prior_teaching_experience(work){
    this.volunteer.prior_teaching_experience = work;

  }

  newVolunteer(): void {
    // this.meeting = new Meeting();
    this.save(this.volunteer);

  }
  private save(volunteer: Volunteer): void {
    console.log('Here');
     this.volunteerService.postVolunteer(volunteer).subscribe((data)=>{
       console.log('created Volunteer'  + JSON.stringify(data) );
     })

    // this.reset();
  }
   reset():void{
    this.volunteer = new Volunteer();

  }




 
}

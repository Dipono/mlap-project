import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  aboutMe={introduction:'', firstDescription:'', secondDescription:''}
  constructor() { }

  ngOnInit(): void {
    this.getAboutMe();
  }

  getAboutMe(){
    this.aboutMe.introduction = 'I am Dipono Joel Manasoe, born on the 1st of April 1997, I reside in Pretoria Mamelod.'
    this.aboutMe.firstDescription = `In 2017 I studied Information Technology at Tshwane University of 
                                    Technology, 2018 I was specializing in Software Development. 2019 
                                    while I was looking for in-service training I was attending the program named 
                                    Fourth Industrial Revolution (4IR) Skills from company named Firtech, I was also 
                                    doing software development where it help me to enhance my skills as a developer, 
                                    at the end of the programme I got two badges one for MTA - Introduction to Programming(Python) 
                                    and the other MTA - Software Development Fundamentals(C#).`

    this.aboutMe.secondDescription = `End of 2020 I scored myself an internship at ICEP where I was a software developer, which it 
                                    lasted for 6 months, during this internship I got Agile42(Introduction to Agile and Scrum) budge and 
                                    12 badges from AWS. In the year 2021 is the year I completed my National Diploma (Software Development) 
                                    qualification from Tshwane University of Technology.`
  }

}

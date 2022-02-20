import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  videossource={typeOfFile:"video/mp4", urlPath:'',unsupportedMessage:''};
  description={fullName:'',introduction:'', bodyDescription:''};
  imageSource = {name:'', urlpath:''}

  ngOnInit(): void {
    this.getMyHomePage()
  }

  getMyHomePage(){
    this.videossource.urlPath = '../../assets/video.mp4';
    this.videossource.unsupportedMessage = 'Your browser does not support the video tag.';

    this.imageSource.name='Profile Picture';
    this.imageSource.urlpath= '../../assets/Dipono.jpg'

    this.description.fullName = 'Dipono Joel Manasoe';
    this.description.introduction = `I am Dipono Joel Manasoe, born on the 1st of April 1997, I reside in
                                    Pretoria Mamelod.`;
    this.description.bodyDescription = `I completed my Matric in 2016 and studied at Tshwane University of
                                        Technology from 2017 to 2021, completed my National Diploma in
                                        Information Technology(Software Development)`;
  }

}

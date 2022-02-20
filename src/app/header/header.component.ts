import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSource = {name:'', urlpath:''}
  navigation=[{name:'Home', nav:'/'},
              {name:'About Me', nav:'/about'},
              {name:'Contact Us', nav:'/contact'}
]

  constructor() { }

  ngOnInit(): void {
    this.getHeader();
  }

  getHeader(){
    this.imageSource.name='logo';
    this.imageSource.urlpath= '../../assets/logo.PNG'
  }

}

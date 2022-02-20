import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  socialLinks = [{name:"facebook", link:'https://www.facebook.com/buti.lebute.1', imagePath:''}, 
              {name:"linkedin", link:'https://www.linkedin.com/in/joel-manasoe-266128184/',  imagePath:''}, 
              {name:"twitter", link:'https://twitter.com/ButiJoel2',  imagePath:''}]

  contactNumber={stringCall:"Call", number:"0711915807"}

  ngOnInit(): void {
    this.getSocialLinksAndPhoneNumber()
  }

  getSocialLinksAndPhoneNumber() {
   for(var imageIndex = 0; imageIndex < this.socialLinks.length; imageIndex++){
    this.socialLinks[imageIndex].imagePath = "../../assets/"+this.socialLinks[imageIndex].name+".png";
   }

  }

}

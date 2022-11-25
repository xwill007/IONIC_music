import { Component } from '@angular/core';
import {Router} from "@angular/router";
//import {Storage} from "@ionic/storage";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOps={
    initialSlide:0,
    slidePerView:1,
    centeredSlides:true,
    speed: 400
  }

  slides=[
    {
    title:"1",
    subTitle:"subtitulo",
    description:"Descripcion",
    icon:"close",
    imageSrc:"assets/img/ironman.jpg"
    },
    {
      title:"2",
      subTitle:"subtitulo",
      description:"Descripcion",
      icon:"close",
      imageSrc:"assets/img/ironmaninterface.jpg"
    },
    {
      title:"3",
      subTitle:"subtitulo",
      description:"Descripcion",
      icon:"close",
      imageSrc:"assets/img/ironman.jpg"
    }

  ]
  constructor(private router:Router) { } //
  finish(){
    //this.storage.set("isIntroShowed",true);
    this.router.navigateByUrl("/intro");
  }
}

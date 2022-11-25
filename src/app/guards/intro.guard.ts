import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Storage} from '@ionic/storage-angular';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanActivate {

  constructor(private storage:Storage, private router:Router){}

  async canActivate(){
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.storage.create();
    const isIntroShowed = await this.storage.get('isIntroShowed');
    console.log(isIntroShowed);
    if(isIntroShowed){
      return true;
    }else{
      this.router.navigateByUrl('/intro');
    }
    return false;
  }
  
}

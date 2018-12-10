import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import {LoadingController , ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import { MenuController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import {Observable} from "rxjs";
/**
 * Generated class for the CertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certificate',
  templateUrl: 'certificate.html',
})
export class CertificatePage{
  data = {
    "header": "Catalogue",
    "status": "",
    "request": "",
    
    "items": [
        {
            "id": 1,
            "title": "Black dualshock controller",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/certificateicon.png",
            "expandItems": [
                {
                    "id": "1",
                    "title": "Objective",
                    "description": "Lorem ipsum",
                    "image": "assets/certificateicon.png",
                    "details": "$399.99"
                }
            ]
        }
    ]
};
userdata:any;
id:any;
fetchdata:any;
userinfo:any;
constructor( public menuCtrl: MenuController ,private http:Http , private loadingCtrl: LoadingController , private toastCtrl: ToastController) 
  {     
    this.userdata = JSON.parse(localStorage.getItem('user'));       
    this.id=this.userdata.id;
    let fetch = {
        userid:this.id
    };
    const loader = this.loadingCtrl.create({
        content: "... ارجوك انتظر",
    });
    loader.present();
    this.http.get('http://api.hemam.online/userdate' ,{params: fetch} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(fetchdata =>
    {
        var fresult = fetchdata;
        this.fetchdata= fetchdata;
        this.data.status=this.userinfo;
        this.data.request=fresult.certificate_status;       
        loader.dismiss(); 
        if(fresult == 0){
            console.log('oh no');            
        }else{
         
            console.log('ok');
        }
        
    },
        err => {
            loader.dismiss();
            const toast = this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });

  }

  certificaterequest(){    
 
    let fetch = {
        userid:this.id
    }
    const loader = this.loadingCtrl.create({
        content: "... ارجوك انتظر",
    });
    loader.present();
    this.http.get('http://api.hemam.online/certificate_request' ,{params: fetch} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(data =>
    {
        var result = data;
        this.data= data;      
       console.log(result);
        loader.dismiss();
        if(result == 0){
            console.log('oh no');
        }else{
            const toast = this.toastCtrl.create({
                message: 'تم إرسال الطلب بنجاح',
                duration: 4000
            });
            toast.present();
            console.log('okk');
        }
        
    },
        err => {
            loader.dismiss();
            const toast = this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });


  }

 
  
  @Input() events = {
    'onItemClick': function (item: any) {
         console.log("onItemClick");
     }
 };
  @ViewChild(Content)
  content: Content;

  

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }
 


}

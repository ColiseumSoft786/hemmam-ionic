import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { IonicPage,NavController , Content } from 'ionic-angular';
import {LoadingController , ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import { MenuController } from 'ionic-angular';
import {Observable} from "rxjs";
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage implements OnChanges {
  data = {
    "items": [
        {
            "groupName": "Pending",
            "dateTime": "",
            "items": [
                {
                    "id": "1",
                    "name": "Adeline O'Reilly",
                    "task": "here is Task ",
                    "status" : "Approde",

                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "shareIcon": "more",
                    "image": "assets/images/avatar/24.jpg",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                },
                {
                    "id": 2,
                    "name": "Adeline O'Reilly",
                    "task": "here is Task ",

                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "shareIcon": "more",
                    
                    "image": "assets/images/avatar/10.jpg",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                }
            ]
        },
        {
            "groupName": "Approved",
            "dateTime": "June 26, 2018.",
            "items": [
                {
                    "id": 1,
                    "task": "here is Task ",
                    "name": "Reanna Langosh",
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "shareIcon": "more",
                    "image": "assets/images/avatar/11.jpg",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                },
                {
                    "id": 2,
                    "name": "Theresia Bechtelar",
                    "title": "Lorem ipsum dolor sit amet.",
                    "shareIcon": "more",
                    "image": "assets/images/avatar/12.jpg",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                }
            ]
        },
        {
            "groupName": "Disaproved",
            "dateTime": "August 07, 2018.",
            "items": [
                {
                    "id": 1,
                    "name": "Jena Lesch",
                    "title": "Lorem ipsum dolor sit amet, consectetur.",
                    "shareIcon": "more",
                    "image": "assets/images/avatar/13.jpg",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                },
                {
                    "id": 2,
                    "name": "Yesenia Beer",
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    "shareIcon": "more",
                    "image": "assets/images/avatar/14.jpg",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                }
            ]
        }
    ]
 };
  events= {
    'onItemClick': function (item: any) {
        console.log("onItemClick");
    },
    'onShare': function (item: any) {
        console.log("onShare");
    }
};
  slider = {};
id: any;
userdata: any ;
fetchdata: any;
videoinfo : any;

  constructor( public menuCtrl: MenuController , public navCtrl: NavController,private http:Http , private loadingCtrl: LoadingController , private toastCtrl: ToastController)
  { 
    this.userdata = JSON.parse(localStorage.getItem('user'));
       
    this.id=this.userdata.id;
    let fetch = {
        userid:this.id
    }
    const loader = this.loadingCtrl.create({
        content: "... ارجوك انتظر",
    });
    loader.present();
    this.http.get('http://api.hemam.online/history' ,{params: fetch} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(fetchdata =>
    {
        var fresult = fetchdata;
        this.fetchdata= fetchdata;
        this.videoinfo= fresult;
       console.log(this.videoinfo);
        loader.dismiss();
        if(fresult == 0){
            console.log('disabled');
        }else{
            console.log('sadsfsdfsdf');
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
  ngOnChanges(changes: { [propKey: string]: any }) {
      this.data = changes['data'].currentValue;
  }
  
  onEvent(event: string, item: any, e: any) {
      if (e) {
          e.stopPropagation();
      }
      if (this.events[event]) {
          this.events[event](item);
      }
  }
}


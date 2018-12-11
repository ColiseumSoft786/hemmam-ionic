import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { SponsorPage } from '../sponsor/sponsor';
import { FounderPage } from '../founder/founder';
import { LibraryPage } from '../library/library';
import { PartnerPage } from '../partner/partner';
import { ChallengePage } from '../challenge/challenge';
import { HomePage } from '../home/home';
import { CertificatePage } from '../certificate/certificate';
import {LoadingController , ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import { MenuController } from 'ionic-angular';
import 'rxjs/add/operator/catch';


import {FileTransfer, FileUploadOptions, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import {Camera,CameraOptions} from "@ionic-native/camera";
import {Observable} from "rxjs";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

userdata: any ;
id:any;
test:any;

  constructor(public menuCtrl: MenuController ,private transfer: FileTransfer, private file: File,private camera: Camera, public navCtrl: NavController,private http:Http , private loadingCtrl: LoadingController , private toastCtrl: ToastController , public navParams: NavParams) {
    this.menuCtrl.enable(true, 'logMenu');
    if (localStorage.getItem("user") === null) {
      this.navCtrl.setRoot(HomePage);

  }else{

    this.userdata = JSON.parse(localStorage.getItem('user'));
  
    this.data.name=this.userdata.name;
    this.data.email=this.userdata.email;
    this.data.level=this.userdata.level_status;
    this.data.profile=this.userdata.personal_image;
    this.id=this.userdata.id;

    if(this.userdata.level_status == null){
        this.test = '0';
    }else{
        this.test = '1' ;        
    }
    console.log(this.test);
  }
}



refdata : any;
reffetchdata:any;
refresult:any;
doRefresh(refresher) {
 
  let refdata = {
    userid:this.id
  }
  this.http.get('http://api.hemam.online/userdate' ,{params: refdata} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(data =>
  {
          var refresult = data;
          this.reffetchdata = data;
          localStorage.setItem('user',JSON.stringify(refresult));
          this.userdata=refresult;
          this.navCtrl.setRoot(DashboardPage);
          refresher.complete();
  },
      err => {
          refresher.complete();
          const toast = this.toastCtrl.create({
              message: 'شيء ما خطأ. حاول مرة اخرى',
              duration: 4000
          });
          toast.present();
      });

}

// Gallery ==============================================================================

myphoto:any;
user: any;
private fresh: boolean = false;

changephoto(){ 
    // This is working fine. its for image uplaod
    const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum:false
    };
    this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.myphoto = 'data:image/jpeg;base64,' + imageData;
        this.upload();
    }, (err) => {
        // Handle error
    });
    //this.navCtrl.resize();
}
upload(){
    let url = localStorage.getItem('server');
    const loader = this.loadingCtrl.create({
        content: "... جار التحميل",
    });
    loader.present();
    console.log(this.myphoto);
    //random int
    var timestamp = new Date().getUTCMilliseconds();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let optionss: FileUploadOptions = {
        fileKey: 'photo',
        fileName: "myImage_"+timestamp+".jpg",
        chunkedMode: false,
        httpMethod: 'get',
        mimeType: "image/jpeg",
        headers: {}
    };
    
    fileTransfer.upload(this.myphoto,'http://api.hemam.online/photoupdater?userid='+this.id,optionss)
        .then((data) => {
          
            this.updateuser();
        loader.dismiss();
        
        }, (err) => {
            // error
            console.log(err.getMessage);  
                 
            loader.dismiss();
          
        });  
    }
// close =====================================================================================================




updateuser(){
    let refdata = {
        userid:this.id
      }
      this.http.get('http://api.hemam.online/userdate' ,{params: refdata} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(reffetchdata =>
      {
        var refresult = reffetchdata;           
          localStorage.setItem('user',JSON.stringify(refresult));
          this.userdata=refresult;
          this.navCtrl.setRoot(DashboardPage);         
      },
          err => {
              const toast = this.toastCtrl.create({
                  message: 'شيء ما خطأ. حاول مرة اخرى',
                  duration: 4000
              });
              toast.present();
          });
}
    data = {
      "image" : "E:\Xampp\htdocs\hemmam\hemmam_admin\web\assets\cn.png",
      "title": "",
      "profile" : "",
      "name" : "",      
      "email": "" ,
      "phone": "",
      "level": "",
      "category": "",
      "test": "",
      
      "items": [
                
        {
          "id": 3,
          "category": "Interior design trends",
          "title": "Work It Baby: 14 Interior Design",
          "like": {
            "icon":"thumbs-up",
            "number": "4",
            "text": "Like",
            "isActive": true
          },
          "comment": {
              "icon":"ios-chatbubbles",
              "number": "4",
              "text": "Comments",
              "isActive": false
          }
      }
  ] 
};
     events = {
      'onItemClick': function(item: any) {
        console.log("onItemClick");
      },
      'onLike': function(item: any) {
        if (item && item.like) {
            if (item.like.isActive) {
                item.like.isActive = false;
                item.like.number--;
            } else {
                item.like.isActive= true;
                item.like.number++;
            }}
        },
          'onComment': function(item: any) {
            if (item && item.comment) {
                if (item.comment.isActive) {
                    item.comment.isActive = false;
                    item.comment.number--;
                } else {
                    item.comment.isActive= true;
                    item.comment.number++;
                }
            }
        }
    };
   
    slider = {};


    // slideHasChanged(slider, index): void {
    //     this.slider[index] = slider;
    //     if (2 == slider._activeIndex) {
    //         if (this.data.items) {
    //             this.data.items.splice(index, 1);
    //         } else {
    //             this.data.splice(index, 1);
    //         }
    //     }
    // }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    gotohistory(){
        this.navCtrl.push(HistoryPage);
      }
    gotosponser(){
      this.navCtrl.push(SponsorPage);
    }
    gotopartner(){
      this.navCtrl.push(PartnerPage);
    }
    gotofounder(){
      this.navCtrl.push(FounderPage);
    }
    
    gotolibrary(){
      this.navCtrl.push(LibraryPage);
    }
    fetchdata :any ;
    
    gotochallenge(){      
        this.navCtrl.push(ChallengePage);     
    }
    gotohicertificate(){
          this.navCtrl.push(CertificatePage);      
    }
}

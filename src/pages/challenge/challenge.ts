
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {LoadingController , ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import { MenuController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { HistoryPage } from '../history/history';
import { HomePage } from '../home/home';


import {FileTransfer, FileUploadOptions, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import {Camera,CameraOptions} from "@ionic-native/camera";
import {Observable} from "rxjs";
import { Chooser } from '@ionic-native/chooser';
import {
    MediaCapture,
    MediaFile,
    CaptureError,
    CaptureImageOptions,
    CaptureVideoOptions
} from '@ionic-native/media-capture';


/**
 * Generated class for the ChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-challenge',
    templateUrl: 'challenge.html',
})
export class ChallengePage {



    data= {
        "firstName": "First Name",
        "lastName": "Last Name",
        "addressLine1": "Address Line 1",
        "addressLine2": "Address Line 2",
        "city": "City",
        "zipCode": "Zip Code",
        "button": "Submit",
        "btn":"enabled"
    };
    events = {
        "onSubmit": function(item: any) {
            console.log("onSubmit");
        }
    };

    firstName:String;
    task: String;
    lastName:String;
    address1:String;
    address2:String;
    city:String;
    zipCode:String;

    name: any;
    id:any;
    email: any;
    videolevel: any;
    userdata: any;
    fetchdata: any;
    ressult : any ;
    test:any;
    selected: any;



    constructor(private mediaCapture: MediaCapture,private chooser: Chooser,public platform: Platform,public navParams: NavParams,private transfer: FileTransfer, private file: File,private camera: Camera, public menuCtrl: MenuController , public navCtrl: NavController,private http:Http , private loadingCtrl: LoadingController , private toastCtrl: ToastController)
    {
        this.menuCtrl.enable(true, 'logMenu');
        if (localStorage.getItem("user") === null) {
            this.navCtrl.setRoot(HomePage);

        }else{

            this.userdata = JSON.parse(localStorage.getItem('user'));

            this.name=this.userdata.name;
            this.email=this.userdata.email;
            //
            this.id=this.userdata.id;
            if(this.userdata.level_status == null){
                this.videolevel = 1 ;
            }else{
                this.videolevel=this.userdata.level_status.id;
            }
            // fetching data

            let fetch = {
                userid:this.videolevel
            };

            const loader = this.loadingCtrl.create({
                content: " ... ارجوك انتظر",
            });
            loader.present();
            this.http.get('http://api.hemam.online/tasksssss' ,{params: fetch} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(fetchdata =>
            {
                var fresult = fetchdata;
                this.fetchdata = fetchdata;
                this.ressult = fresult;
                loader.dismiss();

                if(fresult == 0){
                    const toast = this.toastCtrl.create({
                        message: '* خطأ في الخادم ، يرجى إعادة المحاولة لاحقًا',
                        duration: 4000
                    });
                    toast.present();
                }else{

                }


            },err => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                    message: 'شيء ما خطأ. حاول مرة اخرى',
                    duration: 4000
                });
                toast.present();
                this.navCtrl.setRoot(DashboardPage);
            });
            // fetching data close .

        }

    }

    public myphoto;
    public imgdata;

    user: any;
    dataa: any;
    vid: any;
    public videoset: boolean = false;
    uploadvideo(){
        if (this.firstName == '' || this.task == '' || this.imgdata == null) {
            const toast = this.toastCtrl.create({
                message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                duration: 4000
            });
            toast.present();
        }else{
            console.log("clicked submit btn");
            let datta = {
                videotask: this.task,
                videotitle:this.firstName,
                userid:this.id,
                level:this.videolevel
            };
            const loader = this.loadingCtrl.create({
                content: " ... جلب البيانات",
            });
            loader.present();
            this.http.get('http://api.hemam.online/video' ,{params: datta} ).map(res =>  res.json()).catch(error => Observable.create(error.json())).subscribe(dataa =>
            {
                var result = dataa;
                this.vid= dataa;
                console.log(result);
                loader.dismiss();
                if (result != 0 ){
                    this.upload(result);
                    const toast = this.toastCtrl.create({
                        message: 'تم تحميل الفيديو بنجاح ',
                        duration: 4000
                    });
                    toast.present();
                }else{
                    const toast = this.toastCtrl.create({
                        message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                        duration: 4000
                    });
                    toast.present();
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

    }
    error: any;

    changephoto(){
   /*this.chooser.getFile('video/!*')
            .then(file => this.upload(file) )
            .catch((error: any) => alert(error));*/
/*        let options: CaptureVideoOptions = { limit: 1,duration: 30 };
        this.mediaCapture.captureVideo(options)
            .then(
                (data: MediaFile[]) => alert(data[0].fullPath),
                (err: CaptureError) => console.error(err)
            );*/



        const camera: any = navigator['camera'];
        camera.getPicture(imageData => {
            this.myphoto = null;
            this.imgdata = imageData;
            this.upload(1);
            this.selected = 'Video has been selected';
        }, error => this.error = JSON.stringify(error), {
            sourceType : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.VIDEO
            //If i do Video here. it will not upload.
            // Now it will upload the images
            // DO you have any idea ??
        });
    }
    upload(vid){
        const loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        loader.present();
        var timestamp = new Date().getUTCMilliseconds();
        console.log(this.imgdata.toURL());
        const fileTransfer: FileTransferObject = this.transfer.create();
        var options: FileUploadOptions ={
            fileKey: 'vid',
            mimeType: "multipart/form-data",
            chunkedMode: false,
            httpMethod: 'post',
            // headers: {Connection: 'close'}
        };
        fileTransfer.upload(this.imgdata,'http://api.hemam.online/videosendersave?userid='+vid,options)
            .then((data) => {
                console.log('Done: ' + JSON.stringify(data));

                loader.dismiss();
            }, (error) => {
                // error
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
                console.log(error.body);
                loader.dismiss();

            });
    }

    onEvent(event: string, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.getItemData());
            this.resetValue();
        }
    }

    getItemData() {
        return {
            'firstName': this.firstName,
            'lastName':this.lastName,
            'address1':this.address1,
            'address2':this.address2,
            'city':this.city,
            'zipCode':this.zipCode

        };
    }

    resetValue() {
        this.firstName = "";
        this.task="";
        this.lastName = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.zipCode = "";

    }

}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {LoadingController , ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http, RequestOptions} from "@angular/http";
import { MenuController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { HomePage } from '../home/home';


import {FileTransfer} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import {Camera} from "@ionic-native/camera";
import {Observable} from "rxjs";
import { Chooser } from '@ionic-native/chooser';
import { MediaCapture } from '@ionic-native/media-capture';
import {FileChooser} from "@ionic-native/file-chooser";
import {FileChooserAndroidProvider} from "../../providers/file-chooser-android/file-chooser-android";
import {HttpHeaders} from "@angular/common/http";


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



  
    events = {
        "onSubmit": function(item: any) {
            console.log("onSubmit");
        }
    };
    challenge :any;
    firstName:any;
    task: any;
    lastName: any;
    address1: any;
    address2: any;
    city: any;
    zipCode: any;



    name: any;
    id:any;
    email: any;
    videolevel: any;
    userdata: any;
    fetchdata: any;
    ressult : any ;
    selected: any;
    challengeStatus:any;
    MyselectedChalenge:any;

    constructor(private fileChooserAndroid: FileChooserAndroidProvider,private fileChooser: FileChooser,private mediaCapture: MediaCapture,private chooser: Chooser,public platform: Platform,public navParams: NavParams,private transfer: FileTransfer, private file: File,private camera: Camera, public menuCtrl: MenuController , public navCtrl: NavController,private http:Http , private loadingCtrl: LoadingController , private toastCtrl: ToastController)
    {
        this.menuCtrl.enable(true, 'logMenu');
        if (localStorage.getItem("user") === null) {
            this.navCtrl.setRoot(HomePage);

        }else{

            this.userdata = JSON.parse(localStorage.getItem('user'));

            this.name=this.userdata.name;
            this.email=this.userdata.email;
            this.challengeStatus =this.userdata.challengestatus;
            // console.log(this.userdata);
            // console.log(this.userdata.challengestatus , '======');
            this.id=this.userdata.id;
            if(this.userdata.level_status == null){
                this.videolevel = 1 ;
            }else{
                this.videolevel=this.userdata.level_status.id;
            }
            if(this.challengeStatus == 1){
                this.fetchChallenges();
            }









            

// fetching Task

            let fetch = {
                userid:this.videolevel
            };
            const loader = this.loadingCtrl.create({
                content: " ... ارجوك انتظر",
            });
            loader.present();
            this.http.get('http://api.hemam.online/task' ,{params: fetch} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(fetchdata =>
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
            // fetching Task close .

        }

    }
    empty :any ;
    fetchChallenges(){
        let datta = {
            userid:this.id,
        };
        const loader = this.loadingCtrl.create({
            content: " ... ارجوك انتظر",
        });
        loader.present();
        this.http.get('http://api.hemam.online/fetchchallenge' ,{params: datta} ).map(res =>  res.json()).catch(error => Observable.create(error.json())).subscribe(dataa =>
        {
            loader.dismiss();
            this.MyselectedChalenge = dataa;            
            if(dataa.length == 0){
                this.empty = 1 ;
            }else{
                this.empty = 0 ;
            }
            console.log(this.MyselectedChalenge);
        });
    }


    public myphoto;
    public imgdata;
    public fileer: any;

    user: any;
    dataa: any;
    vid: any;
    public videoset: boolean = false;

    sendchallenge(){
        if (this.task.length == 0) {
            const toast = this.toastCtrl.create({
                message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                duration: 4000
            });
            toast.present();
        }else{
            console.log("clicked submit btn");
            let datta = {
                videotask: JSON.stringify(this.task),
                userid:this.id,
                level:this.videolevel,
                
            };
            console.log(datta.videotask);
            const loader = this.loadingCtrl.create({
                content: " ... جلب البيانات",
            });
            loader.present();
            this.http.get('http://api.hemam.online/sendchallenge' ,{params: datta} ).map(res =>  res.json()).catch(error => Observable.create(error.json())).subscribe(dataa =>
            {
                var result = dataa;
                this.MyselectedChalenge = dataa[0];
                this.challengeStatus = 1;
                let user = JSON.stringify(dataa[1]);
                localStorage.setItem('user',user);
                console.log(result);

                loader.dismiss();
                if (result != 0 ){                 
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

    private currentid;
    clickupload(id){
        this.currentid = id;
        document.getElementById('uploadfile').click();
    }
    uploadfromfile($event) : void{

        this.fileer = $event.target.files[0];
        if (this.fileer != null){
            const loader = this.loadingCtrl.create({
                content: "Loading...",
            });
            loader.present();
            let clientConfirmData = new FormData();
            clientConfirmData.append('photo', this.fileer);

            // var headers = new Headers();
            // headers.append('Content-Type', 'multipart/form-data' );
            // const requestOptions = new RequestOptions({ headers: headers });
            this.http.post('http://api.hemam.online/videosender?userid='+this.currentid,clientConfirmData).map(res =>  res.json()).catch(error => Observable.create(error.json())).subscribe(dataa =>
            {
                console.log(JSON.stringify(dataa));
                this.MyselectedChalenge = dataa;
                const toast = this.toastCtrl.create({
                message: 'تم تحميل الفيديو بنجاح',
                duration: 5000
            });
            toast.present();
            this.navCtrl.setRoot(DashboardPage); 
                loader.dismiss();
            },err => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                    message: 'شيء ما خطأ. حاول مرة اخرى',
                    duration: 4000
                });
                toast.present();
            });
        }


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
        

    }

}
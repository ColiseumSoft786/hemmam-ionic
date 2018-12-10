import { Component } from '@angular/core';
import {LoadingController, NavController , ToastController} from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {error} from "@angular/compiler/src/util";
import {Observable} from "rxjs";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  events: any;
 
  public usernameLogin: string;
  public passwordLogin: string;
  private isUsernameValidLogin: boolean = true;
  private isPasswordValidLogin: boolean = true;

  public usernameRegister: string;
  public passwordRegister: string;
  public countryRegister: string;
  public emailRegister: string;
  public mobileRegister: string;
  public genderRegister: string;
  public nationalityRegister: string;
  public identificationtypeRegister: string;
  public idnumberRegister: string;
  public addresssRegister: string;
  public stateRegister: string;
  public educationLevelRegister: string;
  public majorRegister: string;
  public universityRegister: string;
  public graduationYearRegister: string;
  public workplaceRegister: string;
  public voulntrySideRegister: string;

  private isEmailValidRegister: boolean = true;
  private isUsernameValidRegister: boolean = true;
  private isPasswordValidRegister: boolean = true;
  private isCountryValidRegister: boolean = true;
  private isMobileValidRegister: boolean = true;
  private isNationalityValidRegister: boolean = true;
  private isIdnumberValidRegister: boolean = true;
  private isAddresssValidRegister: boolean = true;
  private isStateValidRegister: boolean = true;
  private isEducationLevelValidRegister: boolean = true;
  private isMajorValidRegister: boolean = true;
  private isUniversityValidRegister: boolean = true;
  private isGraduationYearValidRegister: boolean = true;
  private isWorkplaceValidRegister: boolean = true;
  private isVoulntrySideValidRegister: boolean = true;

  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public selectedItem = "login";
  constructor( public menuCtrl: MenuController , public navCtrl: NavController,private http:Http , private loadingCtrl: LoadingController , private toastCtrl: ToastController ) {
    this.menuCtrl.enable(false, 'logMenu');
    if (localStorage.getItem("user") === null) {
        
    }else{
        this.navCtrl.setRoot(DashboardPage); 
    }


      this.data = {
          "segmentLogin"    : "تسجيل الدخول",
          "segmentRegister" : "تسجيل",
          "background"      : "assets/images/background/39.jpg",
          "skip"            : "تخطى",
          "logo"            : "assets/logo of app.png",
          "login" : {

              "username"          : " أدخل البريد الإلكتروني الخاص بك ",
              "password"          : " ادخل رقمك السري ",
              "labelUsername"     : "البريد الإلكتروني",
              "labelPassword"     : "كلمه السر",
              "forgotPassword"    : "هل نسيت كلمة المرور؟",
              "facebookLogin"     : "تسجيل الدخول مع",
              "login"             : "تسجيل الدخول",
              "title"             : "تسجيل الدخول إلى حسابك",
              "errorUser"         : "لا يمكن أن يكون الحقل خاليًا",
              "errorPassword"     : "لا يمكن أن يكون الحقل خاليًا"
          },
          "register": {
              "title"               : "تسجيل",
              "username"            : "أدخل اسمك الكامل",
              "city"                : "مسقط رأسك",
              "password"            : "ادخل رقمك السري",
              "email"               : "عنوان بريدك الإلكتروني",
              "Mobile"              : "أدخل هاتفك المحمول",
              "Nationality"         : "أدخل جنسيتك",
              "Identificationtype"  : "ادخل رقمك السري",
              "IdNumber"            : "أدخل رقم الهوية الخاص بك",
              "Addresss"            : "من أي بلد أنت؟",
              "State"               : "أدخل دولتك",
              "EducationLevel"      : "أدخل مستوى التعليم الخاص بك",
              "Major"               : "أدخل تخصصك",
              "University"          : "أدخل جامعتك",
              "GraduationYear"      : "ادخل سنة التخرج",
              "Workplace"           : "أدخل مكان عملك",
              "VoulntrySide"        : "",
              "register"            : "تسجيل",
              "lableUsername"       : "الاسم الكامل",
              "lablePassword"       : "كلمه السر",
              "lableEmail"          : "البريد الإلكتروني",
              "lableMobile"         : "التليفون المحمول",
              "lableNationality"    : "الجنسية",
              "lableIdentificationtype"  : "نوع الهوية",
              "lableIdNumber"       : "رقم الهوية",
              "lableAddresss"       : "عنوان",
              "lableState"          : "حالة",
              "lableEducationLevel" : "مستوى التعليم",
              "lableMajor"          : "رائد",
              "lableUniversity"     : "جامعة",
              "lableGraduationYear" : "سنة التخرج",
              "lableWorkplace"      : "مكان العمل",
              "lableVoulntrySide"   : "طوعي الجانب",
              "lablePersonalImage"  : "صورة شخصية",
              "errorUser"           : "لا يمكن أن يكون الحقل خاليًا",
              "errorPassword"       : "لا يمكن أن يكون الحقل خاليًا",
              "errorEmail"          : "عنوان البريد الإلكتروني غير صالح",
              "errorCountry"        : "لا يمكن أن يكون الحقل خاليًا",
              "errorCity"           : "لا يمكن أن يكون الحقل خاليًا"
          }
      };
             this.events = {
                onLogin: function (params) {
                    console.log("onLogin");
                },
                onRegister: function (params) {
                    console.log("onRegister");
                },
                onSkip: function (params) {
                    console.log("onSkip");
                },
                onFacebook: function (params) {
                    console.log("onFacebook");
                }
            };
  }
    url : any;
    dataa: any;
  onEvent = (event: string): void => {
      if (event == "onLogin" ) {
          if (this.validateLogin()) {
            let datta = {
                useremail: this.usernameLogin,
                userpass: this.passwordLogin
            }
            console.log('clicked');
            const loader = this.loadingCtrl.create({
                content:  " ... جلب البيانات",
            });
            loader.present();
            this.http.get('http://api.hemam.online/loginuser' ,{params: datta} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(dataa => {

                var result = dataa;
                this.dataa= dataa;
                loader.dismiss();
                if (result != 0 ){
                    localStorage.setItem('user',JSON.stringify(result));
                    this.navCtrl.setRoot(DashboardPage);
                }else{
                    const toast = this.toastCtrl.create({
                        message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                        duration: 4000
                    });
                    toast.present();
                }

            },
                err => {
                    const toast = this.toastCtrl.create({
                        message: 'شيء ما خطأ. حاول مرة اخرى',
                        duration: 4000
                    });
                    toast.present();
                    loader.dismiss();

                });
           



          }
          if (this.events[event]) {
              this.events[event]({
                  'username' : this.usernameLogin,
                  'password' : this.passwordLogin                  
              });
              
          }
      } else if (event == "onRegister") {
        
          if (this.validateRegister()) {
            console.log('clicked ======');
          let datta = {              
            usernameR               : this. usernameRegister,
            passwordR               : this. passwordRegister,
            countryR                : this. countryRegister,
            emailR                  : this. emailRegister,
            mobileR                 : this. mobileRegister,
            genderR                 : this. genderRegister,
            nationalityR            : this. nationalityRegister,
            identificationtypeR     : this. identificationtypeRegister,
            idNumberR               : this. idnumberRegister,
            addresssR               : this. addresssRegister,
            stateR                  : this. stateRegister,
            educationLevelR         : this. educationLevelRegister,
            majorR                  : this. majorRegister,
            universityR             : this. universityRegister,
            graduationYearR         : this. graduationYearRegister,
            workplaceR              : this. workplaceRegister,
            voulntrySideR           : this. voulntrySideRegister,
          }
  
          console.log('clicked');
          const loader = this.loadingCtrl.create({
              content: "... جلب البيانات",
          });
          loader.present();
          this.http.get('http://api.hemam.online/registeruser' ,{params: datta} ).map(res => res.json()).catch(error => Observable.create(error.json())).subscribe(dataa => {
              var result = dataa;
              this.dataa= dataa;
              loader.dismiss();
              if (result == 1  ){
                const toast = this.toastCtrl.create({                    
                    message: 'البريد الالكتروني موجود بالفعل',
                    duration: 4000
                });
                toast.present();                  
              }else{
                localStorage.setItem('user',JSON.stringify(result));
                this.navCtrl.setRoot(DashboardPage);                 
              }
      
          }, err => {
                  const toast = this.toastCtrl.create({
                      message: 'شيء ما خطأ. حاول مرة اخرى',
                      duration: 4000
                  });
                  toast.present();
                  loader.dismiss();

              });
        }
          if (this.events[event]) {
              this.events[event]({
                           

              });
          }
      }
    }

  validateLogin():boolean {
      this.isUsernameValidLogin = true;
      this.isPasswordValidLogin = true;      
      if (!this.usernameLogin ||this.usernameLogin.length == 0) {
          this.isUsernameValidLogin = false;
      }

      if (!this.passwordLogin || this.passwordLogin.length == 0) {
          this.isPasswordValidLogin = false;
      }

      return this.isPasswordValidLogin && this.isUsernameValidLogin;
   }

   validateRegister():boolean {
      this.isEmailValidRegister = true;
      this.isUsernameValidRegister = true;
      this.isPasswordValidRegister = true;
      this.isCountryValidRegister = true;
      this.isMobileValidRegister = true;
      this.isNationalityValidRegister = true;
      this.isIdnumberValidRegister = true;
      this.isAddresssValidRegister = true;
      this.isStateValidRegister = true;
      this.isEducationLevelValidRegister = true;
      this.isMajorValidRegister = true;
      this.isUniversityValidRegister = true;
      this.isGraduationYearValidRegister = true;
      this.isWorkplaceValidRegister = true;
      this.isVoulntrySideValidRegister = true;

      
    if (!this.usernameRegister ||this.usernameRegister.length == 0) {
          this.isUsernameValidRegister = false;
      }
    if (!this.emailRegister ||this.emailRegister.length == 0) {
        this.isEmailValidRegister = false;
    }

    if (!this.passwordRegister || this.passwordRegister.length == 0) {
          this.isPasswordValidRegister = false;
      }
    if (!this.mobileRegister || this.mobileRegister.length == 0) {
        this.isMobileValidRegister = false;
    }
    // if (!this.genderRegister || this.genderRegister.length == 0) {
    //     this.isgenderValidRegister = false;
    // }  
    // if (!this.countryRegister || this.countryRegister.length == 0) {
    //       this.isCountryValidRegister = false;
    // }
    if (!this.nationalityRegister || this.nationalityRegister.length == 0) {
        this.isNationalityValidRegister = false;
    }
    // if (!this.identificationtypeRegister || this.identificationtypeRegister.length == 0) {
    //     this.isIdentificationtypeValidRegister = false;
    // }
    if (!this.idnumberRegister || this.idnumberRegister.length == 0) {
        this.isIdnumberValidRegister = false;
    }
    if (!this.addresssRegister || this.addresssRegister.length == 0) {
        this.isAddresssValidRegister = false;
    }
    if (!this.stateRegister || this.stateRegister.length == 0) {
        this.isStateValidRegister = false;
    }
    if (!this.educationLevelRegister || this.educationLevelRegister.length == 0) {
        this.isEducationLevelValidRegister = false;
    }
    if (!this.majorRegister || this.majorRegister.length == 0) {
        this.isMajorValidRegister = false;
    }
    if (!this.universityRegister || this.universityRegister.length == 0) {
        this.isUniversityValidRegister = false;
    }
    if (!this.graduationYearRegister || this.graduationYearRegister.length == 0) {
        this.isGraduationYearValidRegister = false;
    }
    if (!this.workplaceRegister || this.workplaceRegister.length == 0) {
        this.isWorkplaceValidRegister = false;
    }
    if (!this.voulntrySideRegister || this.voulntrySideRegister.length == 0) {
        this.isVoulntrySideValidRegister = false;
    }
    
        // this.isEmailValidRegister = this.regex.test(this.emailRegister);

      return this.isEmailValidRegister &&
          this.isPasswordValidRegister &&
          this.isUsernameValidRegister &&
          this.isCountryValidRegister&&
          this.isMobileValidRegister &&
          this.isNationalityValidRegister &&        
          this.isIdnumberValidRegister &&
          this.isAddresssValidRegister &&
          this.isStateValidRegister &&
          this.isEducationLevelValidRegister &&
          this.isMajorValidRegister &&
          this.isUniversityValidRegister &&
          this.isGraduationYearValidRegister &&
          this.isWorkplaceValidRegister &&
          this.isVoulntrySideValidRegister;
  }

   isEnabled(value:string): boolean {
      return this.selectedItem == value;
   }
  



}

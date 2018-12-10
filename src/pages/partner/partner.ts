import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

/**
 * Generated class for the PartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partner',
  templateUrl: 'partner.html',
})
export class PartnerPage {
    data = {
      "image"   : "assets/partner/logo_partners.png",
      "image1"  : "assets/partner/1.png",
      "image2"  : "assets/partner/2.png",
      "image3"  : "assets/partner/3.png",
      "image4"  : "assets/partner/4.png",
      "image5"  : "assets/partner/5.png",
      "image6"  : "assets/partner/6.png",
      "image7"  : "assets/partner/7.png",
      "image8"  : "assets/partner/8.png",
      "image9"  : "assets/partner/9.png",
      "image10" : "assets/partner/10.png",
      "image11" : "assets/partner/11.png",
      "image12" : "assets/partner/12.png",
      "image13" : "assets/partner/13.png",
      "image14" : "assets/partner/14.png",
      "image15" : "assets/partner/15.png",
      "image16" : "assets/partner/16.png",
      "image17" : "assets/partner/17.png",
      "image18" : "assets/partner/18.png",
      "image19" : "assets/partner/19.png",
      "image20" : "assets/partner/20.png",
      "image21" : "assets/partner/21.png",
      "image22" : "assets/partner/22.png",
      "image23" : "assets/partner/23.png",
      "image24" : "assets/partner/24.png",
      "image25" : "assets/partner/25.png",
      "image26" : "assets/partner/26.png",
      "title": "Carolyn Guerrero",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "category": "populary",
      "followers": "Followers",
      "valueFollowers": "439",
      "following": "Following",
      "valueFollowing": "297",
      "posts": "Posts",
      "valuePosts": "43",
      "items": [
        {
          "id": 1,
          "category": "Prisma Labs",
          "title": "Prisma Photo Editor",
          "like": {
            "icon":"thumbs-up",
            "text": "Like",
            "isActive": true
          },
          "comment": {
              "icon":"ios-chatbubbles",
              "number": "4",
              "text": "Comments",
              "isActive": false
          }
        },
        {
          "id": 2,
          "category": "Apple watch",
          "title": "Built with your heart in mind",
          "like": {
            "icon":"thumbs-up",
            "text": "Like",
            "isActive": true
          },
          "comment": {
              "icon":"ios-chatbubbles",
              "number": "4",
              "text": "Comments",
              "isActive": false
          }
        },
        {
          "id": 3,
          "category": "Interior design trends",
          "title": "Work It Baby: 14 Interior Design",
          "like": {
            "icon":"thumbs-up",
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
   
  
    constructor() { }
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage { 
  data = {
  "image1" : "assets/1.png",
  "image2" : "assets/2.png",
  "image3" : "assets/3.png",
  "image4" : "assets/4.png",
  "video1" : "assets/lab/1.mp4",
  "video2" : "assets/lab/2.mp4",
  
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

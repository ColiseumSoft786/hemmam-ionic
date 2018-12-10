import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

/**
 * Generated class for the SponsorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsor',
  templateUrl: 'sponsor.html',
})
export class SponsorPage {
   data= {
    "items": [
      {
          "id": 1,
          "icon": "ios-arrow-dropright",
          "iconText": "Watch now",
          "title": "Lorem ipsum dolor sitamet",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          "image": "assets/logo_partners.png",
          "reviews": "4.12 (78 reviews)",
          "ratingStar": {
              "iconsStars": [
                  {
                      "isActive": true,
                      "iconActive": "icon-star",
                      "iconInactive": "icon-star-outline"
                  },
                  {
                      "isActive": true,
                      "iconActive": "icon-star",
                      "iconInactive": "icon-star-outline"
                  },
                  {
                      "isActive": true,
                      "iconActive": "icon-star",
                      "iconInactive": "icon-star-outline"
                  },
                  {
                      "isActive": true,
                      "iconActive": "icon-star",
                      "iconInactive": "icon-star-outline"
                  },
                  {
                      "isActive": false,
                      "iconActive": "icon-star",
                      "iconInactive": "icon-star-outline"
                  }
              ],
          }
      }
    ]
};
events = {
  'onItemClick': function (item: any) {
       console.log("onItemClick");
    },
   'onRates': function (index: number) {
       
    }
};
  @ViewChild(Content)
  content: Content;
  slider = {};

  constructor() { }

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

  onStarClass(items: any, index: number, e: any) {
    if (e) {
      e.stopPropagation();
    }
    for (var i = 0; i < items.length; i++) {
      items[i].isActive = i <= index;
    }
    this.onEvent("onRates", index, e);
  };

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
}

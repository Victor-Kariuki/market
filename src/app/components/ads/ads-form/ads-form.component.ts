import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { UploadFile } from 'ng-zorro-antd/upload';

import { Ad } from '../../../models/ad.model';
import { Category } from '../../../models/category.model';
import { FetchCategories } from '../../../store/actions/category.actions';
import { CreateAd } from '../../../store/actions/ad.actions';

@Component({
  selector: 'app-ads-form',
  template: `
   <form nzForm #adForm="ngForm" (ngSubmit)="submitForm()" enctype="multipart/form-data">
     <div nz-row [nzGutter]="[32,{ xs: 8, sm: 16, md: 24, lg: 32 }]">
       <div nz-col nzXs="24" nzSm="24" nzMd="14" nzLg="14" nzXl="14">
         <nz-card nzTitle="Ad Details">
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the ad title!">
               <nz-input-group nzPrefixIcon="user">
                 <input type="text" nz-input placeholder="Ad Title" [(ngModel)]="ad.title" name="title" required />
               </nz-input-group>
             </nz-form-control>
           </nz-form-item>
           <div nz-row [nzGutter]="{ xs: 8, sm: 16, md: 24, lg: 32 }">
             <div nz-col [nzSpan]="12">
               <nz-form-item>
                 <nz-form-control nzHasFeedback nzErrorTip="Please input the ad's condition!">
                   <nz-select nzPlaceHolder="Select ad's condition" [(ngModel)]="ad.condition" name="condition">
                     <nz-option nzValue="new" nzLabel="new"></nz-option>
                     <nz-option nzValue="used" nzLabel="used"></nz-option>
                   </nz-select>
                 </nz-form-control>
               </nz-form-item>
             </div>
             <div nz-col [nzSpan]="12">
               <nz-form-item>
                 <nz-form-control nzHasFeedback nzErrorTip="Please input the ad's category!">
                   <nz-select nzPlaceHolder="Select a category" [(ngModel)]="ad.category" name="category" required>
                     <div *ngFor="let category of categories">
                       <nz-option [nzValue]="category.category" [nzLabel]="category.category"></nz-option>
                     </div>
                   </nz-select>
                 </nz-form-control>
               </nz-form-item>
             </div>
           </div>
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the ad's price!">
               <nz-input-group nzPrefixIcon="dollar">
                 <input type="number" nz-input placeholder="Ad Price" [(ngModel)]="ad.prize" name="prize" required />
               </nz-input-group>
             </nz-form-control>
           </nz-form-item>
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the ad's description!">
               <angular-editor [(ngModel)]="ad.description" name="description" placeholder="Ad description ...">
               </angular-editor>
             </nz-form-control>
           </nz-form-item>
           <nz-form-control nzHasFeedback nzErrorTip="Please input the contact name!">
             <nz-input-group nzPrefixIcon="user">
               <input type="file" (change)="onFilesAdded($event.target.files)" placeholder="Upload a file..."
                 multiple />
             </nz-input-group>
           </nz-form-control>
         </nz-card>
       </div>
       <div nz-col nzXs="24" nzSm="24" nzMd="10" nzLg="10" nzXl="10">
         <nz-card nzTitle="Contact Details">
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the contact name!">
               <nz-input-group nzPrefixIcon="user">
                 <input type="text" nz-input placeholder="Name" [(ngModel)]="ad.name" name="name" required />
               </nz-input-group>
             </nz-form-control>
           </nz-form-item>
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the contact email!">
               <nz-input-group nzPrefixIcon="mail">
                 <input type="email" nz-input placeholder="Email" [(ngModel)]="ad.email" name="email" required />
               </nz-input-group>
             </nz-form-control>
           </nz-form-item>
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the contact phone!">
               <nz-input-group nzPrefixIcon="phone">
                 <input type="number" nz-input placeholder="Phone No" [(ngModel)]="ad.phone" name="phone" required />
               </nz-input-group>
             </nz-form-control>
           </nz-form-item>
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the contact city!">
               <nz-input-group nzPrefixIcon="globe">
                 <input type="text" nz-input placeholder="Location" [(ngModel)]="ad.city" name="city" required />
               </nz-input-group>
             </nz-form-control>
           </nz-form-item>
         </nz-card>
         <br>
         <nz-card nzTitle="Delivery">
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please select an option">
               <nz-radio-group [(ngModel)]="ad.delivery" name="delivery">
                 <label nz-radio nzValue="yes">Yes</label>
                 <label nz-radio nzValue="no">No</label>
               </nz-radio-group>
             </nz-form-control>
           </nz-form-item>
           <nz-form-item>
             <nz-form-control nzHasFeedback nzErrorTip="Please input the deliverer!">
               <nz-select nzPlaceHolder="Who is paying for the delivery" [(ngModel)]="ad.toPayDelivery"
                 name="toPayDelivery">
                 <nz-option nzValue="seller" nzLabel="Seller"></nz-option>
                 <nz-option nzValue="buyer" nzLabel="Buyer"></nz-option>
               </nz-select>
             </nz-form-control>
           </nz-form-item>
         </nz-card>
         <br>
         <button nz-button type="submit" [nzType]="'primary'">Submit Ad</button>
       </div>
     </div>
   </form>
  `,
  styles: [
  ]
})
export class AdsFormComponent implements OnInit {

  ad: Ad;
  date = new Date().toUTCString();
  categories: Category[];
  fileList = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.ad = {
      _id: '',
      itemId: '',
      category: '',
      condition: '',
      type: '',
      title: '',
      description: '',
      prize: null,
      image: [],
      images: [],
      city: '',
      delivery: '',
      toPayDelivery: '',
      name: '',
      phone: '',
      email: '',
      views: 0,
      isActive: 'true',
      dateCreated: `${this.date}`,
    };
    this.store.dispatch(new FetchCategories()).subscribe(() => {
      this.categories = this.store.selectSnapshot(state => state.categories.categories);
    });
  }

  getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  }


  onFilesAdded(files) {
    this.fileList = files;
    console.log(this.fileList);
  }

  submitForm() {
    this.ad.images = [ ...this.fileList];
    console.log(`Hey there ${JSON.stringify(this.ad)}`);
    this.store.dispatch(new CreateAd(this.ad)).subscribe(() => {
      this.ad = {
        _id: '',
        itemId: '',
        category: '',
        condition: '',
        type: '',
        title: '',
        description: '',
        prize: null,
        image: [],
        images: [],
        city: '',
        delivery: '',
        toPayDelivery: '',
        name: '',
        phone: '',
        email: '',
        views: 0,
        isActive: 'true',
        dateCreated: `${this.date}`,
      };
    });
    // this.router.navigate(['/ads/single']);
  }

}

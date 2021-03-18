import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './user/about/about.component';
import { BlogComponent } from './user/blog/blog.component';
import { RoomSearchResultComponent } from './user/room-search-result/room-search-result.component';
import { CelebrationGalleryComponent } from './user/celebration-gallery/celebration-gallery.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { FacilitiesComponent } from './user/facilities/facilities.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { NewsComponent } from './user/news/news.component';
import { PrintComponent } from './user/print/print.component';
import { SelectRoomTypeComponent } from './user/select-room-type/select-room-type.component';
import { SelectRoomNoComponent } from './user/select-room-no/select-room-no.component';
import { UserFromComponent } from './user/user-from/user-from.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';





const userRoute:Routes=[
  {path:'',component:SelectRoomTypeComponent},
  {path:'search',component:RoomSearchResultComponent},
  {path:'user-form',component:UserFromComponent},
  {path:'print',component:PrintComponent},
  {path:'gallery',component:CelebrationGalleryComponent},
  {path:'Facilities',component:FacilitiesComponent},
  {path:'News',component:NewsComponent},
  {path:'About',component:AboutComponent},
  {path:'Blog',component:BlogComponent},
  {path:'contactus',component:ContactUsComponent},
  
  
  ]

  
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    BlogComponent,
    RoomSearchResultComponent,
    CelebrationGalleryComponent,
    ContactUsComponent,
    FacilitiesComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    PrintComponent,
    SelectRoomTypeComponent,
    SelectRoomNoComponent,
    UserFromComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(userRoute, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    // SelectBusService,
    // BookingService,
    // UserService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


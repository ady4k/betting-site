import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from './_modals/login-modal/login-modal.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { GamesComponent } from './games/games.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { InfoComponent } from './info/info.component';
import { SharedModule } from './_modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginModalComponent,
    HomeComponent,
    RegisterComponent,
    MemberDetailComponent,
    GamesComponent,
    WithdrawComponent,
    GamesListComponent,
    AffiliatesComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { BruttoPipe } from './pipe/brutto.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { BillsComponent } from './page/bills/bills.component';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { NavComponent } from './common/nav/nav.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BillsComponent,
    BillEditComponent,
    NavComponent,
    FilterPipe,
    BruttoPipe,
    UsersComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { BruttoPipe } from './pipe/brutto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BruttoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

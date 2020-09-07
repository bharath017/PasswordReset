import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './reset/reset.component';
import { bootstrap } from 'bootstrap';
import { ResetService }from './reset/reset.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ResetFormComponent } from './reset-form/reset-form.component';
import { ResetFormService } from './reset-form/reset-form.service';


@NgModule({
  declarations: [
    AppComponent,
    ResetComponent,
    ResetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ResetService,ResetFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

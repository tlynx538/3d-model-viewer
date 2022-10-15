import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarUploadComponent } from './sidebar-upload/sidebar-upload.component';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarUploadComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { SidebarUploadComponent } from './sidebar-upload/sidebar-upload.component';
const routes: Routes = [
  {
    path: '', component:MainViewComponent
  },
  {
    path: 'upload', component:SidebarUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

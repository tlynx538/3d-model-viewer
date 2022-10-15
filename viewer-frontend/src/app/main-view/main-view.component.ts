import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
//import {MatDialog, MatDialogRef,DialogService} from '@angular/material/dialog';
//import { SidebarUploadComponent } from '../sidebar-upload/sidebar-upload.component';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() {
   }
  ngOnInit(): void {
  }
}

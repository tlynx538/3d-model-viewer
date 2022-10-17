import { Component, OnInit } from '@angular/core';
import { SidebarUploadService } from '../sidebar-upload.service';
@Component({
  selector: 'app-sidebar-upload',
  templateUrl: './sidebar-upload.component.html',
  styleUrls: ['./sidebar-upload.component.css']
})
export class SidebarUploadComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File | null = null; // Variable to store file

  constructor(private sidebarUploadService: SidebarUploadService) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onUpload() {
    this.loading = !this.loading;
    console.log("Reached On Upload");
    this.sidebarUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable 
            }
        }
    );
  }
}

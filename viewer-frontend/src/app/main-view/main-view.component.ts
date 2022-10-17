import { ChangeDetectionStrategy,Component, Input, OnInit } from '@angular/core';
import { GetFileDetailsService } from '../get-file-details.service';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent implements OnInit {
  //items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  public files = new Array<any>();
  loading : boolean = false;
  public files2 = [
    {
        "file_name": "mdl.dae",
        "file_serial": "t0wo6"
    },
    {
        "file_name": "mdl.mtl",
        "file_serial": "s86wj"
    },
    {
        "file_name": "mdl.obj",
        "file_serial": "1vgt0"
    },
    {
        "file_name": "hmain.json",
        "file_serial": "hvcba"
    }
];
  constructor(public getFileDetailsService : GetFileDetailsService) {
  }

  ngOnInit(): void {
    // this.loading = !this.loading;
    // this.getFileDetailsService.getFiles().subscribe(response => {
    //   if(typeof(response) === 'object')
    //   {
    //     response.forEach(element => {
    //       this.files.push(element);
    //     });
    //     this.loading = false;
    //   }
    // });
    // console.log(this.loading);
    // console.log(this.files);
    // console.log(this.files2);
  }
  onUpdate(){
    this.loading = !this.loading;
    this.getFileDetailsService.getFiles().subscribe(response => {
      if(typeof(response) === 'object')
      {
        // response.forEach(element => {
        //   this.files.push(element);
        // });
        this.files = response;
        this.loading = false;
      }
    });
    console.log(this.loading);
    console.log(this.files);
    console.log(this.files2);
  }
}

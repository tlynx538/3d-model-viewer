import { ChangeDetectionStrategy,Component, Input, OnInit } from '@angular/core';
import { GetFileDetailsService } from '../get-file-details.service';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent implements OnInit {
  public files = new Array<any>();
  loading : boolean = false;
  constructor(public getFileDetailsService : GetFileDetailsService) {
  }

  async ngOnInit(): Promise<void> {
    await this.onUpdate();
  }
  async onUpdate (){
    this.loading = !this.loading;
    await this.getFileDetailsService.getFiles().subscribe(response => {
      if(typeof(response) === 'object')
      {
        this.files = response;
        this.loading = false;
      }
    });
  }
}

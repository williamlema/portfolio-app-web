import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  portfolioList: Array<any>;
  selectedProfile: any;
  twitterUrl = 'https://twitter.com/';
  timeLine: Array<any>;

  constructor(private prtfolioService: PortfolioService){
  }

  ngOnInit(): void {
    this.prtfolioService.getPortFoliosList().subscribe( v => this.portfolioList = v.data );
  }

  selected(profile: any): void {
    this.timeLine = null;
    this.selectedProfile = profile;
    this.prtfolioService.getPortFoliosTimeline(profile.id).subscribe(
      v => this.timeLine = v.data,
      () => this.timeLine = null);
  }

}

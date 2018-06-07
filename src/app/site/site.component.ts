import {Component, OnInit} from '@angular/core';
import {Site} from '../model/site';
import {SiteService} from '../service/site.service';
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site: Site = new Site();
  constructor(private siteService: SiteService) {}

  ngOnInit() {
  }
  create(site: Site) {

    this.siteService.addSite(site)
      .subscribe(
      data => {


      },
      error => {

      }
      );
  }

}

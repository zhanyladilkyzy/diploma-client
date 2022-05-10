import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.route)
  }

  showLink(): boolean {
    // this.route.url
    return false;
  }

  navCalendar(): void {
    this.router.navigate(['/calendar']);
  }
  navReports(): void {
    this.router.navigate(['/report']);
  }
  navDashboard(): void {
    this.router.navigate(['/dashboards']);
  }
}

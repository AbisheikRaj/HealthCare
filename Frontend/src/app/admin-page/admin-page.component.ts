import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("accept") !== "true") {
      this.router.navigate(["/admin_login"]);
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/admin_login"]);
  }

}

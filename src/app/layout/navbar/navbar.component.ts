import { Component, OnInit } from '@angular/core';
import { faBell, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fabell = faBell;
  faplus = faPlus;
  fauser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}

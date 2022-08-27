import { Component, OnInit } from '@angular/core';
import { faBell, faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fabell = faBell;
  falike = faThumbsUp;
  facoment = faComment;
  fashare = faShare;

  constructor() { }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';
import { GitCallService } from '../gitcall.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  results!:any;
  constructor(public searchService: GitCallService) { }

  ngOnInit(): void {
  }

  gitSearch(searchTerm:string){
this.searchService.getUser(searchTerm).subscribe({next:(data: any) => {
  this.results = data;
  console.log(this.results);
}});


  }
}

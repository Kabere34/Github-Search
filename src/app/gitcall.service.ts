import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitCallService {
  results!: any;

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`, {
      headers: { Authorization: `token ${environment.apiKey}` }
    })
  }

getRepos(username: string) {
    return this.http.get(`https://api.github.com/users/${username}/repos`, {
      headers: { Authorization: `token ${environment.apiKey}` }
    })
  }

  // getRepos(username: string) {
  //   return this.http.get(`https://api.github.com/users/${username}/repos`, {
  //     headers: { Authorization: `token ${environment.apiKey}` }
  //   })
  // }
}

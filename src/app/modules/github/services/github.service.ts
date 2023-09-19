import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Repository } from '../models/repository.model';

@Injectable()
export class GithubService {
  private readonly username = 'RMJuanRuiz';
  private userUrl = 'https://api.github.com/users/' + this.username;

  constructor(private http: HttpClient) {}

  getUserName(): string {
    return this.username;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }
}

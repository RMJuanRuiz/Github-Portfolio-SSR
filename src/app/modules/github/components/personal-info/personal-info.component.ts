import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  user$: Observable<User> | undefined;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.user$ = this.githubService.getUser();
  }
}

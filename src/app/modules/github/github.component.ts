import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {
  username = '';

  constructor(private githubService: GithubService){}

  ngOnInit(): void {
    this.username = this.githubService.getUserName();
  }
  
}

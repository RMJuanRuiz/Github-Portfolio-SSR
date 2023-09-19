import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent {
  username = '';

  constructor(
    private githubService: GithubService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.username = this.githubService.getUserName();
    this.titleService.setTitle('Github Portfolio');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s Github Portfolio`,
      },
      {
        name: 'author',
        content: this.username,
      },
    ]);
  }
}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GithubComponent } from './github.component';
import { GithubService } from './services/github.service';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [GithubComponent, PersonalInfoComponent],
  exports: [GithubComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [GithubService]
})
export class GithubModule {}

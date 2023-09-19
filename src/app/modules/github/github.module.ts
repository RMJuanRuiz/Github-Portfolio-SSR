import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GithubComponent } from './github.component';
import { GithubService } from './services/github.service';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { PanelComponent } from 'src/app/shared';

@NgModule({
  declarations: [GithubComponent, PersonalInfoComponent, RepositoriesComponent],
  exports: [GithubComponent],
  imports: [CommonModule, HttpClientModule, PanelComponent],
  providers: [GithubService],
})
export class GithubModule {}

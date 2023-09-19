import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { GithubModule } from './modules/github/github.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TransferHttpCacheModule, GithubModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

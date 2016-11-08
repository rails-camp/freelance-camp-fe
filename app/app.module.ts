import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		HomepageComponent
	],
	bootstrap: [
		HomepageComponent
	]
})
export class AppModule {}
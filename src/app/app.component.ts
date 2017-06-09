import { Component, Renderer, ViewChild, ElementRef } from '@angular/core';
import { YoutubeService } from "app/services/youtube.service";
import { StatusService } from "app/services/status.service";
import { AuthService } from "app/services/auth.service";
import { HttpService } from "app/services/http.service";
import { Router } from "@angular/router";
import { URLSearchParams } from "@angular/http";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
				private youtubeService: YoutubeService,
				private status: StatusService,
				private auth: AuthService,
				private http: HttpService,
				private router: Router,
				private renderer: Renderer
	) {}

	@ViewChild('navInput') navInput: ElementRef;

	youtubeQuery: string = '';

	search() {

		let that = this;

		setTimeout(function(){

			that.navInput.nativeElement.focus();

		}, 30);

		if(this.youtubeQuery == '') return;

		this.router.navigate(['query', this.youtubeQuery]);

	}

	handleInputKeyPress(event) {
		if (event.keyCode == 13)
			this.clickSearch();
	}

	clickCore() {
		this.hideContextual();
		this.hideVideoCtrl();
	}

	clickSearch() {
		this.hideContextual();
		this.showInput();
		this.hideSuggests();
		this.hideVideoCtrl();
		this.search();
	}

	clickMenu() {
		this.hideInput();
		this.toggleContextual();
		this.hideVideoCtrl();
	}

	clickInput() {
		this.status.suggestsOpen = true;
		this.hideVideoCtrl();
	}

	hideVideoCtrl() {
		this.status.videoCtrlOpen = false;
	}

	toggleContextual() {
		this.status.contextualOpen = !this.status.contextualOpen;

		if(this.status.contextualOpen) {
			let params = new URLSearchParams();

			this.youtubeService.api('getMySubscriptions', params);
		}

	}

	hideContextual() {
		this.status.contextualOpen = false;
	}

	showInput() {
		this.status.showInput = true;
	}

	hideInput() {
		this.status.showInput = false;
	}

	hideSuggests() {
		this.status.suggestsOpen = false;
	}

	toggleSuggests() {
		this.status.suggestsOpen = !this.status.suggestsOpen;
	}

	suggests = {};

	getSuggests() {

		if(!this.suggests[this.youtubeQuery]) {

			let params = new URLSearchParams();

			params.set('q', this.youtubeQuery);

			this.http.send(location.protocol+'//'+location.host + location.pathname + 'api/getSuggestQuery', params).then(
				res => {
					this.suggests[res[0]] = res[1];
				},

				err => {

				}
			);

		}
	}

	completeYoutubeQuery(suggest) {
		this.youtubeQuery = suggest;
		this.toggleSuggests();
		this.clickSearch();
		this.search();
	}
}

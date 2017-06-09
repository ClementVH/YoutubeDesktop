import { Injectable } from '@angular/core';

import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import { Cookie } from 'ng2-cookies';

@Injectable()

export class AuthService {

	constructor(private http: Http) {

		this.access_token = Cookie.get('access_token');

		if(!this.access_token) {

			this.redirectToAuth('');
		}

	}

	redirectToAuth(next_url: string) {

		let redirect_uri: string = location.protocol+'//'+location.host;

		redirect_uri += location.pathname + 'token';

		console.log(redirect_uri);

		let url = this.url;
		url += '?' + 'client_id=' + this.client_id;
		url += '&' + 'redirect_uri=' + redirect_uri;
		url += '&' + 'response_type=' + this.response_type;
		url += '&' + 'scope=' + this.scope;
		url += '&' + 'state=' + btoa(next_url);

		location.href = url;

	}

	access_token: string;

	url: string = 'https://accounts.google.com/o/oauth2/auth';

	client_id: string = '42957678009-9ohuunq6oagrf8jd6m1pem2d3arr6dke.apps.googleusercontent.com';
	response_type: string = 'code';
	scope: string = 'https://www.googleapis.com/auth/youtube.readonly';

}
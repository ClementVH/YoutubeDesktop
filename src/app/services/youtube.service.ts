import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import { AuthService } from './auth.service';
import { StatusService } from './status.service';

import 'rxjs/add/operator/toPromise'

@Injectable()

export class YoutubeService {

	constructor(private http: Http, private auth: AuthService, private status: StatusService) { }

	apiUrl = "https://www.googleapis.com/youtube/v3/";

	videos: Array<any>;

	subs: Array<any>;

	getNextUrl(params: URLSearchParams): string {

		if(params.has('q'))
			return '#/query/' + params.get('q');

		else if(params.has('id') && params.has('title'))
			return '#/channel/' + params.get('title') + '/' + params.get('id');

		else
			return '';
	}

	handleResponse(res: any) {

		if(res.kind == "youtube#searchListResponse")
			this.videos = res.items;

		if(res.kind == "youtube#subscriptionListResponse")
			this.subs = res.items;

		this.status.spinnerOn = false;

	}

	api(method: string, params: URLSearchParams, spin?: boolean) {

		if(spin === undefined)
			this.status.spinnerOn = true;

		params.set('access_token', this.auth.access_token);

		let options = new RequestOptions({
			search: params
		});

		return this.http.get(location.protocol+'//'+location.host + location.pathname + 'api/' + method, options).toPromise().then(
			res => {
				console.log('OK', res.json());
				this.handleResponse(res.json());
				return res.json();
			},
			err => {
				console.log('ERROR', err);
				this.auth.redirectToAuth(this.getNextUrl(params));
			}
		)

	}

}
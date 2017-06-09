import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()

export class HttpService {

	constructor(private http: Http) { }

	videos: Array<any>;

	send(url: string, params: URLSearchParams) {

		let options = new RequestOptions({
			search: params
		});

		return this.http.get(url, options).toPromise()
			.then(
				res => res.json(),
				err => console.log("ERROR", err)
			);
	}

}
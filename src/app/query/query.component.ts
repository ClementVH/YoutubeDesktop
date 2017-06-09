import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "app/services/youtube.service";
import { ActivatedRoute } from "@angular/router";
import { URLSearchParams } from "@angular/http";

@Component({
  selector: 'query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

	constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {}

	sub;

	ngOnInit() {

		console.log('Query Component Init');

		this.sub = this.route.params.subscribe(
			_params => {

				let params = new URLSearchParams();
				params.set('q', _params['q']);

				this.youtubeService.api('getVideosFromQuery', params);

			}
		)

	}

	ngOnDestroy() {

		console.log('Query Component Destroy');

		this.sub.unsubscribe();

	}

}

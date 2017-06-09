import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "app/services/youtube.service";
import { ActivatedRoute } from "@angular/router";
import { URLSearchParams } from "@angular/http";

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent {

	constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {}

	sub;

	ngOnInit() {

		console.log('Query Component Init');

		this.sub = this.route.params.subscribe(
			_params => {

				let params = new URLSearchParams();
				params.set('channelId', _params['id']);

				this.youtubeService.api('getVideosOfChannel', params);

			}
		)

	}

	ngOnDestroy() {

		console.log('Query Component Destroy');

		this.sub.unsubscribe();

	}

}
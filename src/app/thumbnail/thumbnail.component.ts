import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { HttpService } from "app/services/http.service";
import { NotifService } from "app/services/notif.service";
import { YoutubeService } from "app/services/youtube.service";
import { Router } from "@angular/router";
import { URLSearchParams } from "@angular/http";

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

	@Input() video;

	safeStyle: any;

	constructor(
				private sanitizer: DomSanitizer,
				private httpService: HttpService,
				private notif: NotifService,
				private youtubeService: YoutubeService,
				private router: Router
	) {}

	ngOnInit() {
		if(this.video.id.kind == "youtube#channel") {

			let unsafeStyle = "width: 74px; height: 74px";

			this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(unsafeStyle);

		}
		else this.safeStyle = '';

	}

	getImage() {
		return this.video.snippet.thumbnails.medium.url;
	}

	isVideo() {
		return this.video.id.kind == 'youtube#video';
	}

	isChannel() {
		return this.video.id.kind == 'youtube#channel';
	}

	isPlaylist() {
		return this.video.id.kind == 'youtube#playlist';
	}

	clickThumbnail() {

		if(this.isVideo())
			this.emitVideo();

		else if(this.isChannel()) {

			console.log(this.video.id.channelId);

			this.router.navigate(['channel', this.video.snippet.channelTitle, this.video.id.channelId]);

		}

	}

	emitVideo() {
		let videoId = this.video.id.videoId;

		let params = new URLSearchParams();
		params.set('videoId', videoId);

		this.httpService.send('sendVideoId', params);

		this.notif.addNotif();
	}

}

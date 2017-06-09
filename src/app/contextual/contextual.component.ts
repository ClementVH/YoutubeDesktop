import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "app/services/youtube.service";
import { StatusService } from "app/services/status.service";
import { Router } from "@angular/router";

@Component({
  selector: 'contextual',
  templateUrl: './contextual.component.html',
  styleUrls: ['./contextual.component.css']
})
export class ContextualComponent {

	constructor(
				private yt: YoutubeService,
				private status: StatusService,
				private router: Router
	) {}

	searchChannel(channelId: string, channelTitle: string) {

		this.status.contextualOpen = false;

		this.router.navigate(['channel', channelTitle, channelId]);

	}

	subs: any = []

}

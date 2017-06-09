import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { URLSearchParams } from "@angular/http";
import { StatusService } from "app/services/status.service";
import { YoutubeService } from "app/services/youtube.service";

@Component({
  selector: 'video-ctrl',
  templateUrl: './video-control.component.html',
  styleUrls: ['./video-control.component.css']
})
export class VideoControlComponent {

	@ViewChild('volume') volume: ElementRef;

	@ViewChild('timeline') timeline: ElementRef;

	@ViewChild('timelineFront') timelineFront: ElementRef;

	@ViewChild('test') test: ElementRef;

	constructor(private status: StatusService, private yt: YoutubeService, private renderer: Renderer) { }

	ngAfterViewInit() {
		this.getVideoInfos();
	}

	getParams(): URLSearchParams {
		return new URLSearchParams();
	}

	getVideoInfos() {
		let params = this.getParams();

		this.yt.api('getVideoInfos', params, false).then(
			res => this.updateInfos(res),
			err => {}
		);

	}

	updateInfos(data) {
		if(data != {}) {
			let volume = Math.round(data['volume'] * 100);
			this.renderer.setElementStyle(this.volume.nativeElement, 'width', volume + '%');

			let time = Math.round((data['currentTime'] / data['duration']) * 100);
			this.renderer.setElementStyle(this.timelineFront.nativeElement, 'width', time + '%');
		}
	}

	toggleVideoState() {
		let params = this.getParams();
		this.yt.api('toggleVideoState', params, false);
	}

	toggleFullscreen() {
		let params = this.getParams();
		this.yt.api('toggleFullscreen', params, false);
	}

	decrVolume() {
		let params = this.getParams();
		this.yt.api('decrVolume', params, false).then(
			res => this.getVideoInfos(),
			err => {}
		);
	}

	incrVolume() {
		let params = this.getParams();
		this.yt.api('incrVolume', params, false).then(
			res => this.getVideoInfos(),
			err => {}
		);
	}

	setCurrentTime(event) {
		let params = this.getParams();
		console.log(event.layerX, this.timeline.nativeElement.offsetWidth, Math.round(event.layerX / this.timeline.nativeElement.offsetWidth * 100));
		params.set('percent', Math.round(event.layerX / this.timeline.nativeElement.offsetWidth * 100) + '')
		this.yt.api('setCurrentTime', params, false).then(
			res => this.getVideoInfos(),
			err => {}
		);
	}

	showVideoCtrl() {
		this.status.videoCtrlOpen = true;
		this.status.contextualOpen = false;
		this.renderer.setElementClass(this.test.nativeElement, 'openVC', true);
		this.getVideoInfos();
	}

	hideVideoCtrl() {
		this.status.videoCtrlOpen = false;
		this.renderer.setElementClass(this.test.nativeElement, 'openVC', false);
	}

}

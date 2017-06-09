import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from "app/query/query.component";
import { ChannelComponent } from "app/channel/channel.component";
import { AuthService } from "app/services/auth.service";
import { HttpService } from "app/services/http.service";
import { StatusService } from "app/services/status.service";
import { NotifService } from "app/services/notif.service";
import { YoutubeService } from "app/services/youtube.service";

const routes: Routes = [
	{
		path: '',
		children: [

			{ path: 'query/:q', component: QueryComponent },

			{ path: 'channel/:title/:id', component: ChannelComponent },

			{ path: '', redirectTo: '', pathMatch: 'full'}
	]
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	providers: [AuthService, HttpService, StatusService, NotifService, YoutubeService]
})
export class AppRoutingModule { }

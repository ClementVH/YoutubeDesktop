import { Injectable } from '@angular/core';

@Injectable()
export class NotifService {

    constructor() {}

    notifs = []

    addNotif() {

        let notif = {
                title: 'Success',
                core: 'Video send to electron app'
            };

        this.notifs.push(notif);

        let that = this;

        setTimeout(function() {
            that.notifs.splice(that.notifs.lastIndexOf(notif), 1);
        }, 2000);

    }

    removeNotif(notif) {

        this.notifs.forEach(_notif => {
            if(notif == _notif)
                notif.timeLeft = 1;
        })

    }

}

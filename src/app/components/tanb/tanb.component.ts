import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ContactMeComponent } from 'src/app/core/modal/contact-me/contact-me.component';

enum BalloonState {
  top = "top",
  bottom = "bottom"
}

@Component({
  selector: 'app-tanb',
  templateUrl: './tanb.component.html',
  styleUrls: ['./tanb.component.scss'],
  animations: [
    trigger('balloon', [
      state(BalloonState.top, style({
        transform: 'translateY(-20px)'
      })),
      state(BalloonState.bottom, style({
        transform: 'translateY(0px)'
      })),
      transition(BalloonState.bottom + ' => ' + BalloonState.top,
                 animate('7000ms ease-in-out')),
      transition(BalloonState.top + ' => ' + BalloonState.bottom,
                 animate('7000ms ease-in-out'))
    ]),
  ]
})
export class TanbComponent implements OnInit {
  states = [BalloonState.bottom,
            BalloonState.bottom];
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.states[0] = BalloonState.top;
      this.states[1] = BalloonState.top;
    }, 0);
  }

  onEnd(event, index) {
    let wait = (Math.floor(Math.random() * 9) + 1) * 100;
    if (event.toState === BalloonState.bottom) {
      setTimeout(() => {
        this.states[index] = BalloonState.top;
      }, wait);
    } else {
      setTimeout(() => {
        this.states[index] = BalloonState.bottom;
      }, wait);
    }
  }
  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ContactMeComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openModal() {
    this.openModalWithComponent();
  }
}

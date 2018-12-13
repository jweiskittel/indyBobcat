import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = ['../../assets/bobcat7.jpg', '../../assets/bobcat8.jpg', '../../assets/bobcat4.jpg', '../../assets/bobcat9.jpg'];
  options = {loop: true, nav: false, items: 1, autoplay: true, autoplayTimeout: 3500,
    animateIn: 'fadeIn slow', animateOut: 'fadeOut slow'};

  constructor() { }

  ngOnInit() {
  }

}

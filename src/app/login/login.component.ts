import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit {

	ngAfterViewInit(): void {
	    $('.signin-slider').slick({
	      dots: true,
	      arrows: false,
	      autoplay: true,
	      autoplaySpeed: 3000
	    });
	    $('map').imageMapResize();
	}
 
}

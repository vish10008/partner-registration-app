import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements AfterViewInit {

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

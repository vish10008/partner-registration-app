import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html'
})
export class AppCarouselComponent implements AfterViewInit {

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

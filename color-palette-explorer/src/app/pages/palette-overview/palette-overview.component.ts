import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-palette-overview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './palette-overview.component.html',
  styleUrl: './palette-overview.component.css'
})


export class PaletteOverviewComponent implements AfterViewInit {
  
  

  ngAfterViewInit() {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
      });
      
      gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'center',
          end: '820',
          scrub: true
        }
      });

      let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

      itemsL.forEach((item: unknown) => {
        gsap.fromTo(item as Element, { x: -100, opacity: 0 }, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item as Element,
            start: '-850',
            end: '-100',
            scrub: true
          }
        });
      });

      let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

      itemsR.forEach((item: unknown) => {
        gsap.fromTo(item as Element, { x: 100, opacity: 0 }, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item as Element,
            start: '-850',
            end: '-100',
            scrub: true
          }
        });
      });
    }
  }

}

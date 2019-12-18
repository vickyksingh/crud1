import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private render : Renderer, private elm : ElementRef ) {

   }

   @HostListener('mouseenter') getMouseOverActivity(){

    this.render.setElementStyle(this.elm.nativeElement, 'color', 'red');
    this.render.setElementStyle(this.elm.nativeElement, 'font-size' , '30px')
   }

   @HostListener('mouseleave') getmouseOutActivity(){
     this.render.setElementStyle(this.elm.nativeElement, 'color', 'black');
     this.render.setElementStyle(this.elm.nativeElement, 'font-size', '24px')
   }
}

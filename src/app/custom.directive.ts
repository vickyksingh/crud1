import { Directive, Renderer, ElementRef, HostListener } from "@angular/core";



@Directive({
    selector: '[myDir]'
})

export class CustomDirective {
    constructor(private rend : Renderer, private elem: ElementRef){

    }

    @HostListener('click') getClickMethode(){
        this.rend.setElementStyle(this.elem.nativeElement, 'color', 'blue');
        
    }
}



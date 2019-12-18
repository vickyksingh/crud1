import { Directive, TemplateRef, ViewContainerRef, OnInit } from "@angular/core";


@Directive({
    selector: '[ngif]'
})

export class NgifDirective  implements OnInit{



    constructor( private tempref: TemplateRef<any>, private vieref: ViewContainerRef ){
        
    }

    ngOnInit(){
        this.unless
    }

    unless(condition: boolean){
        if(!condition){
            this.vieref.createEmbeddedView(this.tempref)
        }else{
            this.vieref.clear()
        }
    }
}
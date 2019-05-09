import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCambio]'
})
export class CambioDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click', ['$event'])
  onClick(event){
    const fecha = document.getElementById("fecha");
    if(this.el.nativeElement.className == "btn btn-danger"){
      this.el.nativeElement.className = "btn btn-primary";
      fecha.style.display = "none";
    }
    else{
      this.el.nativeElement.className = "btn btn-danger";
      fecha.style.display = "block";
    }
    
  }
}

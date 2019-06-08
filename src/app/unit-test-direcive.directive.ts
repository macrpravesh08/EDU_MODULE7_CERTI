import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeTextDirective]'
})
export class UnitTestDireciveDirective {

  constructor(Element: ElementRef) { 
    Element.nativeElement.innerText = "Text is changed by changeText Directive.";
  }

}

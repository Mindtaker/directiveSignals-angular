import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement!.nativeElement.innerText = 'No errors';
      return;
    }

    const errors = Object.keys(this._errors);
    
    if (errors.includes('required')) {
      this.htmlElement!.nativeElement.innerText = 'The field is required';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement!.nativeElement.innerText = `Minimum of ${current}/${min} characters`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement!.nativeElement.innerText = 'Invalid email';
      return;
    }
  }
}

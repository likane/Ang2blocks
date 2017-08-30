import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
	
	selector:'[autoGrow]',
	host: {
		'(focus)': 'onFocus()'
		'(blur)': 'onBlur()'
	}
})

export class AutoGrowDirective {

	cosntructor(el: ElementRef, renderer: Renderer)
	onFocus(){


	}

	onBlur(){

	}
}
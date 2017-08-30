import {Component} from 'angular2/core';

@Component({
	selector: 'courses'
	template: `
		<h2>courses<h2>
		{{ title }}
		<ul>
			<li *ngFor="#course of courses">
				{{ course }}
			<li>

		</ul>
		`
})

export class CoursesComponent {
	title: string = "the title of courses page";
	courses= ;
}
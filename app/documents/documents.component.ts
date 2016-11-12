import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
		},
		{
			title: "My Second Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
		},
		{
			title: "My Last Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
		}
	]
}
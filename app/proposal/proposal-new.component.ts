import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
	moduleId: module.id,
	selector: 'proposal-new',
	templateUrl: 'proposal-new.component.html',
	styleUrls: ['proposal-new.component.css'],
	providers: [ ProposalService ]
})
export class ProposalNewComponent {
	proposal = new Proposal;
	submitted: boolean = false;

	constructor(
		private proposalService: ProposalService
	) {}

	createProposal(proposal) {
		this.submitted = true;
		this.proposalService.createProposal(proposal)
				.subscribe(
					data => { return true },
					error => {
						console.log("Error saving proposal");
						return Observable.throw(error);
					}
				);
	}
}
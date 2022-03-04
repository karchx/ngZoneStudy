import { Component } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-listtheme',
  templateUrl: './listtheme.component.html',
  styles: [
  ]
})

export class ListthemeComponent {

	constructor(protected dialogRef: NbDialogRef<ListthemeComponent>) { }

	cancel() {
		this.dialogRef.close();
	}

	submit(tema:string) {
		this.dialogRef.close(tema);
	}

}

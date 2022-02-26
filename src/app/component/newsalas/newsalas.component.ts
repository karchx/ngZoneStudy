import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-newsalas',
  templateUrl: './newsalas.component.html',
  styleUrls: ['./newsalas.component.scss']
})
export class NewsalasComponent  {
  constructor(protected dialogRef: NbDialogRef<NewsalasComponent>) { }

	cancel() {
		this.dialogRef.close();
	}

	submit(name:string, time: string) {
		this.dialogRef.close({name, time});
	}

}

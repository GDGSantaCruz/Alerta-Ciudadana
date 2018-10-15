import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import { FileValidators } from './../shared/input-file/file-validators';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {
    formDoc: FormGroup;

    visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  separatorKeysCodes = [ENTER, COMMA];
    fruits = [
        { name: 'Lemon' },
        { name: 'Lime' },
        { name: 'Apple' },
      ];
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.formDoc = this._fb.group({
      photoFile: [{ value: undefined, disabled: false }, [Validators.required, FileValidators.maxContentSize(104857600)]],
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-application-dialog',
  templateUrl: './student-application-dialog.component.html',
  styleUrls: ['./student-application-dialog.component.scss']
})
export class StudentApplicationDialogComponent implements OnInit {

  isFormSubmitted: boolean = false;
  uploadedImageName!: string;

  form: FormGroup =  new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
    patronus: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
    age: new FormControl(null, [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]*$'), Validators.min(18), Validators.max(60)]),
    image: new FormControl(null, [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<StudentApplicationDialogComponent>) { }

  ngOnInit(): void {
  }

  onCancelForm(): void {
    this.dialogRef.close();
  }

  onUploadImage(imageInput: any): void {
    this.uploadedImageName = '';
    this.form.controls['image'].markAsTouched();
    this.form.controls['image'].setValue(null);

    const file: File = imageInput.files[0];

    if(file.type.match(/image\/*/) === null || (file.size / 1000000) > 1) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.uploadedImageName = file.name;
      this.form.controls['image'].setValue(reader.result);
    };

  }

  onSaveForm(): void {
    this.isFormSubmitted = true;

    if(this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

}

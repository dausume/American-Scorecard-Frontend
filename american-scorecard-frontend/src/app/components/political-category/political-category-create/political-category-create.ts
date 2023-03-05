import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { politicalCategory } from '../../../models/politicalCategory';
import { PoliticalCategoryReadComponent } from '../political-category-read/political-category-read';

@Component({
  selector: 'political-category-create',
  templateUrl: 'political-category-create.html',
  styleUrls: ['political-category-create.css']
})
export class PoliticalCategoryCreateComponent {

  politicalCategoryForm : FormGroup;

  fb : FormBuilder;

  newPoliticalCategory : politicalCategory;

  constructor(fb: FormBuilder) {
    this.newPoliticalCategory = new politicalCategory();
    this.fb = fb;
    this.politicalCategoryForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      parentCategories: this.fb.array([
        this.fb.control('')
      ])
    });
  }  

  onSubmit()
  {
    console.log("Triggered onClick")
    //Check that the form is filled out appropriately, if it is, then create the Political Catagory and submit it to the DB.
  }
  
}
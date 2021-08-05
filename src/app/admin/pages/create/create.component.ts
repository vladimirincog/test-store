import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { GlobalActions, AdminActions } from 'app/store/app.actions';
import { ICategory, IProduct } from 'app/store/app.model';
import { GlobalSelectors } from 'app/store/app.selectors';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  categories: ICategory[];

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    pieces: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
  });

  constructor(public store: Store, public adminService: AdminService) {}

  ngOnInit(): void {
    this.store.dispatch(GlobalActions.getCategories());
    this.store.select(GlobalSelectors.categories).subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSubmit(form: FormGroup, formDirective: FormGroupDirective): void {
    const product: IProduct = {
      categoryId: this.categories.find((category) => {
        return category.name === this.form.get('categories').value;
      }).id,
      img: this.form.get('img').value,
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      pieces: this.form.get('pieces').value,
      price: this.form.get('price').value,
    };

    this.store.dispatch(AdminActions.createProduct({ product: product }));
    formDirective.resetForm();
    this.form.reset();
  }
}

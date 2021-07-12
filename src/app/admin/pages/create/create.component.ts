import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GlobalActions } from 'app/store/app.actions';
import { Category, Product } from 'app/store/app.model';
import { GlobalSelectors } from 'app/store/app.selectors';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  categories: Category[];

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

  onSubmit(): void {
    const product: Product = {
      categoryId: this.categories.find((category) => {
        return category.name === this.form.get('categories').value;
      }).id,
      img: this.form.get('img').value,
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      pieces: this.form.get('pieces').value,
      price: this.form.get('price').value,
    };

    this.adminService.createProduct(product).subscribe((response: Product) => console.log(response));
  }
}

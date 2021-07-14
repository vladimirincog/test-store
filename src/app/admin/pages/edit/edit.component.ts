import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICategory, IProduct } from 'app/store/app.model';
import { Store } from '@ngrx/store';
import { AdminService } from 'app/admin/services/admin.service';
import { GlobalActions } from 'app/store/app.actions';
import { GlobalSelectors } from 'app/store/app.selectors';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  categories: ICategory[];
  productId: string;
  product: IProduct;

  form: FormGroup;

  constructor(
    public store: Store,
    public adminService: AdminService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params.id;
    });

    this.store.dispatch(GlobalActions.getCategories());
    this.store
      .select(GlobalSelectors.categories)
      .subscribe((categories: ICategory[]) => {
        this.categories = categories;
      });

    this.store.dispatch(GlobalActions.getProductById({ id: this.productId }));
    this.store
      .select(GlobalSelectors.product)
      .subscribe((product: IProduct) => {
        this.product = product;

        if (this.product != undefined) {
          this.form = new FormGroup({
            name: new FormControl(this.product.name, [Validators.required]),
            price: new FormControl(this.product.price, [Validators.required]),
            pieces: new FormControl(this.product.pieces, [Validators.required]),
            description: new FormControl(this.product.description, [
              Validators.required,
            ]),
            img: new FormControl(this.product.img, [Validators.required]),
            categories: new FormControl(
              this.categories.find(
                (category) => category.id === this.product.categoryId
              ).name,
              [Validators.required]
            ),
          });
        }
      });
  }

  onSubmit(): void {
    const product: IProduct = {
      id: this.productId,
      categoryId: this.categories.find((category) => {
        return category.name === this.form.get('categories').value;
      }).id,
      img: this.form.get('img').value,
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      pieces: this.form.get('pieces').value,
      price: this.form.get('price').value,
    };

    this.adminService
      .updateProduct(product)
      .subscribe((response: IProduct) => console.log(response));

    this.router;
  }
}

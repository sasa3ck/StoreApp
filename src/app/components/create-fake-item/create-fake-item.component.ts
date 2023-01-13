import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeStores } from 'src/app/services/fakeStore.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-fake-item',
  templateUrl: './create-fake-item.component.html',
  styleUrls: ['./create-fake-item.component.sass'],
})
export class CreateFakeItemComponent implements OnInit {
  constructor(
    private fakeStores: FakeStores,
    private modalService: ModalService
  ) {}

  selectCategory = [
    { name: 'Choice', disabled: 'disabled' },
    { name: "men's clothing" },
    { name: "women's clothing" },
    { name: 'jewelery' },
    { name: 'electronics' },
  ];

  form = new FormGroup({
    id: new FormControl<number>(Math.random() * 999),
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(7),
    ]),
    description: new FormControl<string>(''),
    price: new FormControl<number>(null!),
    category: new FormControl<any>(this.selectCategory[0]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    this.fakeStores
      .createFakeProduct({
        id: this.form.value.id as number,
        title: this.form.value.title as string,
        price: this.form.value.price as number,
        description: this.form.value.description as string,
        image: 'https://i.pravatar.cc',
        category: this.form.value.category as string,
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}

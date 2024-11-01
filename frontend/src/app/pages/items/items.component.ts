import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items: any[] = [];
  newItem: any = { name: '', description: '' };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    console.log("Log Items");
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
    console.log(this.items);
  }

  addItem() {
    this.itemService.addItem(this.newItem).subscribe(() => {
      this.loadItems();
      this.newItem = { name: '', description: '' };
    });
  }

}

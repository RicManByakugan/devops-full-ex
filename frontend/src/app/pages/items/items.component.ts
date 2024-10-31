import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
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
    this.itemService.getItems().subscribe(data => {
      this.items = data.data;
    });
  }

  addItem() {
    this.itemService.addItem(this.newItem).subscribe(() => {
      this.loadItems();
      this.newItem = { name: '', description: '' };
    });
  }

}

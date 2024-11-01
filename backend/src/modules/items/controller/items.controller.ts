import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from '../services/items.service';
import { Item } from '../schemas/item.schema';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) { }

    @Get()
    async getItems(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    async getItemById(@Param('id') id: string): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Post()
    async createItem(@Body() item: Item): Promise<Item> {
        return this.itemService.create(item);
    }


}

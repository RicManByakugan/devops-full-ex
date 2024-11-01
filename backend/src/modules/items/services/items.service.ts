import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from '../schemas/item.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private itemModel: Model<Item>){}

    async findAll(): Promise<Item[]> {
        return this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return this.itemModel.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return newItem.save();
    }
}

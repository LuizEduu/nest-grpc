import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  @InjectModel(Order.name)
  private readonly orderModel: Model<Order>;

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create({
      ...createOrderDto,
      status: 'PENDING',
    });
  }

  findAll(acoount_id: string) {
    return this.orderModel.find({
      acoount_id,
    });
  }

  findOne(id: string) {
    return this.orderModel.findById(id);
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order> & Order;

@Schema()
export class Order {
  @Prop({ required: true })
  account_id: string;

  @Prop({ required: true })
  asset_id: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

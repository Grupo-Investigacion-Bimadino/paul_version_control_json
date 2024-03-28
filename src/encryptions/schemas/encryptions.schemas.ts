import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';



@Schema({
    timestamps: true
})

export class Encryptions extends Document {
    @Prop()
    _id: string;

    @Prop()
    tittle: string;

    @Prop()
    body: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'user' })

    @Prop({ type: String, enum: ['DRAFT', 'PUBLISHED', 'DELETE'] })
    status: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'Resource' })
    Recources: string[];

    @Prop()
    kerwords: string[];

}

export const EncryptionsSchema = SchemaFactory.createForClass(Encryptions);
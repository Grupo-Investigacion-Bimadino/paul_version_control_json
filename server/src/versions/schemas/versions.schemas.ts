import { Prop, Schema, SchemaFactory } from '@nestjs/mondoose';
import { Prop, Prop } from '@nestjs/mongoose';
import mongoose, { document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Versions extends Document {
@prop ()
_id: string;

@Prop ()
tittle: string;

@Prop ()
body: string;

@Prop ({type: mongoose.Schema.Type.ObjectId, ref: 'user'})

@Prop ({ type: String, enum:['DRAFT','PUBLISHED', 'DELETE']})
status:string;

@Prop ()
created_at: Date;

@Prop()
updated_at: Date;

@Prop ({ type: mongoose.SchemaTypes.Type.ObjectId}, ref:'Resource')
Recources: string[]; 

@Prop()
kerwords: string[];

}

export const NarrativeSchema = SchemaFactory.createForClass(narrative);
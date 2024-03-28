/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import mongoose from 'mongoose';
export declare class Encryptions extends Document {
    _id: string;
    tittle: string;
    body: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    Recources: string[];
    kerwords: string[];
}
export declare const EncryptionsSchema: mongoose.Schema<Encryptions, mongoose.Model<Encryptions, any, any, any, Document<unknown, any, Encryptions> & Encryptions & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Encryptions, Document<unknown, {}, mongoose.FlatRecord<Encryptions>> & mongoose.FlatRecord<Encryptions> & Required<{
    _id: string;
}>>;

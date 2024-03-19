import { Document } from 'mongoose';
export interface Record extends Document {

readonly name_song: string;
readonly url_file_song: string;
readonly duration: string;
readonly quality: string;
readonly author: string;
readonly singer: string;
}

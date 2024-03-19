import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VersionsModule } from './versions/versions.module';
import { recordModule } from './record/record.module';
import { encryptionsModule } from './encryptions/encryptions.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jnegretehoyos:FoMf8yqSDhjbpiyj@cluster0.8bbmn8z.mongodb.net/?retryWrites=true&w=majority'),
    VersionsModule, 
    RecordModule,
    EncryptionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

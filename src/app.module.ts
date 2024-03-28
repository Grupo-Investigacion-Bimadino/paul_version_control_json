
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VersionsModule } from './versions/versions.module';
import { RecordModule } from './record/record.module';
import { EncryptionsModule } from './encryptions/encryptions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VcsModule } from './vcs/vcs.module';


console.log('DB_URI:', process.env.DB_URI);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    VersionsModule,
    RecordModule,
    EncryptionsModule,
    VcsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

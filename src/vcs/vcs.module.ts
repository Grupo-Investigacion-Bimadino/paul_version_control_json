import { Module } from '@nestjs/common';
import { VcsService } from './vcs.service';
import { VcsController } from './vcs.controller';
import { JsonVersionControlService } from './json-version-control/json-version-control.service';

@Module({
  controllers: [VcsController],
  providers: [VcsService, JsonVersionControlService],
})
export class VcsModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits/:type')
  getCommits(@Param('type') type): Promise<any> {
    return this.githubService.getCommitHistory(type);
  }
}

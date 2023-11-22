import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits')
  getCommits(): Promise<any> {
    return this.githubService.getCommitHistory();
  }
}

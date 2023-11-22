import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  request: {
    fetch: fetch,
  },
});

@Injectable()
export class GithubService {
  async getCommitHistory(type: string): Promise<any> {
    const repo = {
      frontend: process.env.GITHUB_REPO_FRONTEND,
      backend: process.env.GITHUB_REPO_BACKEND,
    };
    try {
      if (repo[type]) {
        const { data: commitsData } = await octokit.request(
          'GET /repos/{owner}/{repo}/commits',
          {
            owner: process.env.GITHUB_OWNER,
            repo: repo[type],
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
            },
          },
        );
        if (commitsData && commitsData.length > 0) {
          return commitsData;
        }
      }
      throw new HttpException('Bad request!', HttpStatus.BAD_REQUEST);
    } catch (error) {
      throw new HttpException('Something went wrong!', HttpStatus.NOT_FOUND);
    }
  }
}

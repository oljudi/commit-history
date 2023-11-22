import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';

describe('GithubController', () => {
  let controller: GithubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [GithubService],
    }).compile();

    controller = module.get<GithubController>(GithubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('API - GithubAPI', () => {
    it('should return an empty array of commits', async () => {
      const mockCommits = [];
      jest.spyOn(controller, 'getCommits').mockResolvedValueOnce(mockCommits);
      const result = await controller.getCommits();
      expect(result).toBe(mockCommits);
    });

    it('should return an array of commits', async () => {
      const mockCommits = [
        {
          author: {
            name: 'oljudi',
            email: 'oljudimark@gmail.com',
            date: '2023-11-22T17:52:20Z',
          },
          committer: {
            name: 'oljudi',
            email: 'oljudimark@gmail.com',
            date: '2023-11-22T17:52:20Z',
          },
          message:
            'refacto: change backend commmits request to search for only one repo',
          comitterUserData: {
            login: 'oljudi',
            id: 43227554,
            node_id: 'MDQ6VXNlcjQzMjI3NTU0',
            avatar_url: 'https://avatars.githubusercontent.com/u/43227554?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/oljudi',
            html_url: 'https://github.com/oljudi',
            followers_url: 'https://api.github.com/users/oljudi/followers',
            following_url:
              'https://api.github.com/users/oljudi/following{/other_user}',
            gists_url: 'https://api.github.com/users/oljudi/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/oljudi/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/oljudi/subscriptions',
            organizations_url: 'https://api.github.com/users/oljudi/orgs',
            repos_url: 'https://api.github.com/users/oljudi/repos',
            events_url: 'https://api.github.com/users/oljudi/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/oljudi/received_events',
            type: 'User',
            site_admin: false,
          },
        },
      ];
      jest.spyOn(controller, 'getCommits').mockResolvedValueOnce(mockCommits);
      const result = await controller.getCommits();
      expect(result).toBe(mockCommits);
    });
  });
});

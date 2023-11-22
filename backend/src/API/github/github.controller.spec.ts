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
    it.skip('should return an array of commits', () => {
      expect(controller.getCommits('backend')).toBe([]);
    });

    it.skip('should fail due undefined repo target', () => {
      expect(controller.getCommits('backend')).toHaveBeenCalled();
    });
  });
});

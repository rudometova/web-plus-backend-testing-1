import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const posts = [
    { text: 'Some pre-existing post' },
    { text: 'Write some tests' },
  ];

  beforeEach(() => {
    postsService = new PostsService();
  });

  it('.create() should add a new post', () => {
    const newPost = posts[0];
    
    const result = postsService.create(newPost);
    
    expect(result.text).toBe(newPost.text);
    expect(result.id).toBeDefined();
    expect(result.date).toBeDefined();
  });

  it('.find() should find a post by id', () => {
    const created = postsService.create(posts[0]);
    
    const found = postsService.find(created.id);
    
    expect(found).toBeDefined();
    expect(found?.id).toBe(created.id);
    expect(found?.text).toBe(posts[0].text);
  });
});
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

    const firstPost = postsService.create(posts[0]);
    const secondPost = postsService.create(posts[1]);
    

    const found = postsService.find(secondPost.id);
    

    expect(found).toBeDefined();
    expect(found?.id).toBe(secondPost.id);
    expect(found?.text).toBe(posts[1].text);
    

    expect(found?.id).not.toBe(firstPost.id);
  });
});
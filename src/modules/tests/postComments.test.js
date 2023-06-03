import { postComments } from '../comments.js';

test('should notify a comment has been posted', async () => {
  const data = {
    item_id: '52819',
    username: 'Junaid',
    comment: 'Hello',
  };

  const response = await postComments(
    data.item_id,
    data.username,
    data.comment,
  );

  expect(response).toBe('Created');
});

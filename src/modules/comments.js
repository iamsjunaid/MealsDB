const postComments = async (itemId, username, comment) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const responseJSON = await response.json();
  return responseJSON;
};

const getComments = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/comments?item_id=${itemId}`,
  );
  const responseJSON = await response.json();
  return responseJSON;
};

export { getComments, postComments };

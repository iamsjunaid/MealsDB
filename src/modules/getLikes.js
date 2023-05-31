const postLike = async (itemId) => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJSON = await response.json();
    return responseJSON;
  };
  
  const getLikes = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/likes');
    const responseJSON = await response.json();
    return responseJSON;
  };
  
export { getLikes, postLike };
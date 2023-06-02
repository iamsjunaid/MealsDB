const postReservation = async (itemId, username, date_start, date_end) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/reservations',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        date_start,
        date_end,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const responseJSON = await response.json();
  return responseJSON;
};

const getReservations = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/reservations?item_id=${itemId}`,
  );
  const responseJSON = await response.json();
  return responseJSON;
};

export { getReservations, postReservation };

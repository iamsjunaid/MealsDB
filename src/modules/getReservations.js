const postReservation = async (itemId, username, startDate, endDate) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/reservations',
    {
      method: 'POST',
      body: JSON.stringify({
        item_idetails: itemId,
        username,
        startDate,
        endDate,
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

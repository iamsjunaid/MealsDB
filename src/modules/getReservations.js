const postReservation = async (itemId, username, dateStart, dateEnd) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/reservations',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        date_start: dateStart,
        date_end: dateEnd,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const responseJSON = await response.text();
  return responseJSON;
};

const getReservations = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tN0rUHEjucNdKTNwHcwx/reservations?item_id=${itemId}`,
  );
  const responseJSON = await response.text();
  return responseJSON;
};

export { getReservations, postReservation };

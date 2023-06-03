const ReservationCounter = require('../counters/reservationsCounter.js');

describe('ReservationCounter', () => {
  let counter;

  beforeEach(() => {
    counter = new ReservationCounter();
  });

  test('should start with a count of 0', () => {
    expect(counter.getCount()).toBe(0);
  });

  test('should increment the count', () => {
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  test('should decrement the count', () => {
    counter.increment();
    counter.decrement();
    expect(counter.getCount()).toBe(0);
  });
});
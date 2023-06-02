class ReservationCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  getCount() {
    return this.count;
  }
}

module.exports = ReservationCounter;
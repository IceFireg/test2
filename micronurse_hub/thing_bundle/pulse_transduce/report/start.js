console.log("Micro nurse hub - pulseTransduce init");

shared.pulseTransduce = {
  timer: null,
  interval: 5000,
  callback: function() {},
  pause: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = null;
  },
  stop: function() {
    this.pause();
  },
  resume: function() {
    this.timer = setInterval(this.callback, this.interval);
  },
  start: function(cb, interval) {
    if (this.interval !== interval || this.callback !== cb) {
      this.stop();
      this.callback = cb;
      this.interval = interval;
      if (this.interval <= 1000) {
        this.interval = 1000;
      }
    }
    this.resume();
  }
};


done();

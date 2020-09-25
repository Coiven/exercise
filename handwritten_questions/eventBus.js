class EventEmitter {
  constructor() {
    this.cb = new Map();
  }

  addListener(type, cb) {
    let cbs = this.cb.get(type) || [];
    this.cb.set(type, [...cbs, cb]);
  }

  emit(type) {
    let cbs = this.cb.get(type);
    let args = [...arguments].slice(1);
    cbs.forEach(cb => cb.apply(this, args));
  }
}

// test
let emitter = new EventEmitter()
// addListener
emitter.addListener('ages', age => {
  console.log(age)
})
// emit event
emitter.emit('ages', 18)
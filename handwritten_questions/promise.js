/**
 * promise 函子实现
 */
class myPromise {
  constructor(executor) {
    const self = this;
    // promise 状态
    self.status = "pending";

    self.value = undefined;
    self.reson = undefined;

    // promise 回调
    self.onResolvedCallbacks = [];
    self.onRejectedCallbacks = [];

    const _resolve = (value) => {
      if (self.status === "pending") {
        self.status = "fulfilled";
        self.value = value;
        self.onResolvedCallbacks.forEach((cb) => cb());
      }
    };

    const _reject = (reson) => {
      if (self.status === "pending") {
        self.status = "rejected";
        self.reson = reson;
        self.onRejectedCallbacks.forEach((cb) => cb());
      }
    };

    try {
      executor(_resolve, _reject);
    } catch (error) {
      _reject(error);
    }
  }

  then(onResolved, onRejected) {
    // Maybe 函子，过滤传入函数
    onResolved =
      typeof onResolved === "function" ? onResolved : function (value) {};
    onRejected =
      typeof onRejected === "function" ? onRejected : function (reson) {};

    return new myPromise((_resolve, _reject) => {
      if (self.status === "pending") {
        this.onResolvedCallbacks.push(() => {
          let data = onResolved(this.value);
          _resolve(data);
        });
        this.onRejectedCallbacks.push(() => {
          let data = onRejected(this.reson);
          _reject(data);
        });
      }
      if (self.status === "fulfilled") {
        let data = onResolved(this.value);
        _resolve(data);
      }
      if (self.status === "rejected") {
        let data = onRejected(this.reson);
        _reject(data);
      }
    });
  }
}

// test
const executor = (resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 500);
};

const a = new myPromise(executor);
a.then((res) => console.log(res));

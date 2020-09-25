// 数据劫持 -> defineProperty
let state = {
  text: ''
}
let input = document.getElementById('input')
let span = document.getElementById('span')

Object.defineProperty(state, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
  },
  set(newVal) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  }
})

// test
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})

// 数据劫持 -> Proxy
let state = {
  text: ''
}
let state_proxy = new Proxy(state, {
  get(target, key) {
    const result = Reflect.get(target, key);
    console.log('获取数据了')
    return result;
  },
  set(target, key, value) {
    const result = Reflect.set(target, key, value);
    console.log('数据更新了')
    return result;
  }
})

// test
state_proxy.text = '123';
console.log(state_proxy.text)
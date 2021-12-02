const Promise = (promiseConstruct) => {
  let promise = {
    'then': then
  }
  const wait = []

  promiseConstruct(resolve)
  return promise
  
  function then (newPromiseConstruct) {
    return Promise(newPromiseConstruct)
  }

  function resolve (val) {
    then.call(cb, val)
  }

}

export { Promise }
  






const myPromise = new Promise((resolve) => {
  window.setTimeout(() => { console.log('hello world!'); resolve(5)}, 1000)
})

myPromise
  .then((resolve) => { resolve(32)})
  .then((resolve) => { resolve(12) })

  
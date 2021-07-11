// CREATING A PROMISE
const myPromise = new Promise((resolve, reject) => { });

// PROMISE RESOLVE
const promiseResolve = new Promise((resolve, reject) => {
  resolve()
})
const promiseResolveWithValue = new Promise((resolve, reject) => {
  resolve('I am success')
})

// PROMISE REJECT
const promiseReject = new Promise((resolve, reject) => {
  reject()
})
const promiseRejectWithValue = new Promise((resolve, reject) => {
  reject('I am error')
})

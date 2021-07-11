const usingPromises = new Promise((resolve, reject) => {
  if (true) {
    resolve('i am success')
  } else {
    reject('i am error')
  }
})

usingPromises
  .then(message => {
    console.log(message)
  })
  .catch(message => {
    console.log(message)
  })
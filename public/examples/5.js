
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve('First')
  })
}

function myPromiseTwo() {
  return new Promise((resolve, reject) => {
    resolve('Second')
  })
}

function myPromiseThree() {
  return new Promise((resolve, reject) => {
    reject('I blew up')
  })
}

// Then/catch approach
myPromise()
  .then((res) => {
    console.log(res)
    return myPromiseTwo()
  })
  .then((res) => {
    console.log(res)
    return myPromiseThree()
  })
  .catch(err => console.log(err))

// async/await approach
async function nested() {
  try {
    const first = await myPromise();
    console.log(first)

    const second = await myPromiseTwo();
    console.log(second)

    await myPromiseThree();
  } catch (error) {
    console.log(error)
  }
}

nested()
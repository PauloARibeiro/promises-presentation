/**
 * Check the list of cereals and match with desired
 * @param {string} desiredCereal the cereal to eat
 * @returns {Object}
 */
function _hasDesiredCereal(desiredCereal) {
  // dummy data
  const availableCereals = [
    'apple jacks',
    'captain crunch',
    'chocapic',
    'estrelitas',
    'oreos',
    'lion',
    'frosted flakes'
  ]

  // Check if store has desired cereal
  if (availableCereals.includes(desiredCereal)) {
    return {
      isDisered: true,
      type: desiredCereal
    }
  }

  // since the store doesnt have desired cereal, return a random one from the store
  const randomCereal = availableCereals[Math.floor(Math.random() * availableCereals.length)]

  return {
    isDisered: false,
    type: randomCereal
  }
}

/**
 * Check if store has cereal
 * @param {string} desiredCereal the cereal to eat
 * @returns {Object}
 */
function _hasCereal(desiredCereal) {
  if (Math.random() >= 0.5) {
    return {
      has: true,
      ..._hasDesiredCereal(desiredCereal)
    }
  }

  return {
    has: false
  }
}

/**
 * @param {string} desiredCereal the cereal to eat
 * @returns {<Promise>}
 */
function getCereal(desiredCereal) {

  const cereal = _hasCereal(desiredCereal)

  return new Promise((resolve, reject) => {
    // Store has cereal and is desired one
    if (cereal.has && cereal.isDisered) {
      return resolve({
        message: "Hey babe, i got the cereal and it's the one you want",
        ...cereal
      })
    }

    // Store has cereal and but its not the desired one
    if (cereal.has && !cereal.isDisered) {
      return resolve({
        message: `Hey babe, i got the cereal but it't not the one you wanted, i got ${cereal.type} instead`,
        ...cereal
      })
    }

    // Store has not cereal
    reject({
      message: "Hey babe, they're all out of cereal, maybe we can cook up some scrambled eggs",
      ...cereal
    })
  })
}


// Using the promise
getCereal()
  .then(res => {
    //Prepare the bowl and milk
    console.log(res)
  })
  .catch(err => {
    // Make some scrambled eggs
    console.log(err)
  })

getCereal()
  .then(res => {
    //Prepare the bowl and milk
    console.log(res)
  })
  .catch(err => {
    // Make some scrambled eggs
    console.log(err)
  })
  .finally(() => {
    console.log('Everything is done');
  });
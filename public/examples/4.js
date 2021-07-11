async function init() {
  const cereal = await getCereal();

  console.log(cereal.message)
}

// Error handling
async function initError() {
  try {
    const cereal = await getCereal();

    console.log(cereal.message)

  } catch (error) {
    console.log(error)
  }
}


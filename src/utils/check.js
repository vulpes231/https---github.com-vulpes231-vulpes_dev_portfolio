function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const luckyNo = Math.random();
      const success = luckyNo < 0.5;
      if (success) {
        resolve("Fetched data!");

        console.log(`${luckyNo} data successfully fetched!`);
      } else {
        reject("An error occured try aagain!");
        console.log(`${luckyNo} try again!`);
      }
    }, 1000);
  });
}

// fetchData();

async function fetchDataNow() {
  try {
    await fetchData();
  } catch (error) {
    console.log(error);
  }
}

fetchDataNow();

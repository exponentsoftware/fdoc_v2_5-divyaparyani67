import fetch from "node-fetch";

async function getSpaceXData() {
  const LAUNCHES_API_URL = "https://api.spacexdata.com/v4/launches";
  const ROCKETS_API_URL = "https://api.spacexdata.com/v4/rockets";
  const PAYLOADS_API_URL = "https://api.spacexdata.com/v4/payloads";

  try {
    const response1 = await fetch(LAUNCHES_API_URL);
    const response2 = await fetch(ROCKETS_API_URL);
    const response3 = await fetch(PAYLOADS_API_URL);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    console.log(data1, data2, data3);
  } catch (err) {
    console.log("Error:", err);
  }
}

getSpaceXData();

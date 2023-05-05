import axios from "axios";

export const dishesData = async () => {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
    );
    console.log("data4 ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

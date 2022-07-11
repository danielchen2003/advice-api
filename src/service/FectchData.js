import axios from "axios"

export default async function FectchData(url) {
  const { data } = await axios.get(url)
  // console.log(a)
  return data
}

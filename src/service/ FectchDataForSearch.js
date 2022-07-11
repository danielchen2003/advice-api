import axios from "axios"

export default async function FectchDataForSearch(keywords) {
  const url = `https://api.adviceslip.com/advice/search/${keywords}`

  const { data } = await axios.get(url)
  return data

  // console.log(data)
}

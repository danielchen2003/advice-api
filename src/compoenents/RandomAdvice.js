import React, { useState, useEffect } from "react"
import FectchData from "../service/FectchData"

export default function RandomAdvice() {
  const url = "https://api.adviceslip.com/advice"
  //设置apifetch 程序 加入input框架 ，当你按下search 启动api改变state显示结果
  const [allAdvice, setAllAdvice] = useState([])

  useEffect(async () => {
    try {
      const data = await FectchData(url)

      const {
        slip: { advice, id },
      } = data
      //当你创建new advice时候传入id 或者 uuid
      // const newAdvice ={ad:advice,id:uuid()}
      //const newAdvice ={ad:advice,id:id()}
      setAllAdvice((prev) => [advice])
      console.log(allAdvice)
    } catch (err) {
      console.log(err)
    }
  }, [])

  async function addAdvice() {
    try {
      const data = await FectchData(url)

      const {
        slip: { advice, id },
      } = data

      setAllAdvice((prev) => [...prev, advice])
      console.log(allAdvice)
    } catch (err) {
      console.log(err)
    }
  }
  // function deleteAdvice(i) {
  //   if(i=== advice.id)
  // }

  const Adviceshow = allAdvice.map((x, index) => <p key={index}>{x}</p>)

  return (
    <div>
      <h1>Random Advice</h1>
      <div className="randomContainer">{Adviceshow}</div>

      <button onClick={addAdvice}>More</button>
    </div>
  )
}

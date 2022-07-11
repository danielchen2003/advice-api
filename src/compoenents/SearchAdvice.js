import React, { useState, useEffect } from "react"
import FectchDataForSearch from "../service/ FectchDataForSearch"

export default function SearchAdvice() {
  const [allSearchAdvice, setAllSearchAdvice] = useState([])
  const [keywords, setKeywords] = useState([])

  async function seachKeyWords(keywords) {
    try {
      const res = await FectchDataForSearch(keywords)
      // console.log(res)
      const { slips } = res

      setAllSearchAdvice(slips)
      // console.log(slips)
    } catch (err) {
      return "no result found"
    }
  }

  function handleChange(e) {
    setKeywords(e.target.value)
  }

  function deleteAdvice(id) {
    // console.dir(e.target.dataset.key)

    const DeletedRes = allSearchAdvice.filter((x) => x.id != id)
    setAllSearchAdvice(DeletedRes)
  }

  const Adviceshow = Array.isArray(allSearchAdvice) ? (
    allSearchAdvice.map((x, index) => (
      <p onClick={() => deleteAdvice(x.id)} key={x.id}>
        {x.advice}
      </p>
    ))
  ) : (
    <h2>No advice found</h2>
  )

  return (
    <div>
      <h1>Search Advice</h1>
      <input
        onChange={handleChange}
        value={keywords}
        type="text"
        placeholder="Please search advicde here"
      ></input>
      <button onClick={() => seachKeyWords(keywords)}>Search Advice</button>

      <div className="adviceContainer">{Adviceshow}</div>
    </div>
  )
}

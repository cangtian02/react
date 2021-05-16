/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-14 14:02:17
 * @Description: ...
 */
import React, { useState, useEffect } from 'react'
import '../App.css'

function Hook(props) {
  const [num, setNum] = useState(0)
  const defaultStr = useDefault(num)

  useEffect(() => {
    console.log('useEffect 载入')
    return () => {
      console.log('useEffect 销毁')
    }
  }, [num])

  return (
    <div className="hook">
      <button onClick={() => setNum(num+1)}>hook，点我</button>
      {num}
      <p>{defaultStr}</p>
    </div>
  )
}

function useDefault(id) {
  const [ids, setIds] = useState(0)

  useEffect(() => {
    setIds(id + '===' + new Date().getTime())
    console.log('useDefault useEffect 载入')
    return () => {
      console.log('useDefault useEffect 销毁')
    }
  }, [id])

  return ids
}

export default Hook

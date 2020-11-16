import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMerch } from './merchandiseSlice'
// import styles from './Merchandise.module.css';

export function Merchandise() {
  const dispatch = useDispatch()
  const merch = useSelector(state => state.merchandise.value)
  const merchStatus = useSelector(state => state.merchandise.status)
  const error = useSelector(state => state.merchandise.error)

  console.log(merch)

  let content = ''

  useEffect(() => {
    if (merchStatus === 'idle') {
      dispatch(fetchMerch())
    }
  }, [merchStatus, dispatch])

  if (merchStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (merchStatus === 'succeeded') {
    content = merch.map(item => (
      <div>
        { item }
      </div>
    ))
  } else if (merchStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="merch-list">
      <h2>Merch</h2>
      {content}
    </section>
  )
}

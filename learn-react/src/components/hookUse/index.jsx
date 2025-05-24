import { useState } from 'react'
// import StateHook from './useStateDemo'
import EffectHook from './useEffectDemo'

export default function HookUse() {
  const [show, setShow] = useState(true)
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
      {/* <StateHook></StateHook> */}
      {show && <EffectHook></EffectHook>}
    </>
  )
}
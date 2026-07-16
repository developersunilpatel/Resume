'use client'

import React, { useEffect, useRef } from 'react'

const Cursor = () => {

  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (
    <div ref={cursorRef}
      className="fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 pointer-events-none"
    ></div>
  )
}

export default Cursor
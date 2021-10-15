import React, { useState, useRef } from 'react'

import LiteQuill from '../editor/LiteQuill'

interface IProps {
  callback: (body: string) => void
}

const Input: React.FC<IProps> = ({ callback }) => {
  const [body, setBody] = useState('')
  const divRef = useRef<HTMLDivElement>(null)

  const handleSubmit = () => {
    const div = divRef.current
    const text = div?.innerText as string
    if (!text.trim()) return

    callback(body)

    setBody('')
  }

  return (
    <div className="text-right">
      <LiteQuill body={body} setBody={setBody} />

      <div
        ref={divRef}
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        style={{ display: 'none' }}
      />

      <button
        className="px-4 py-2 mt-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  )
}

export default Input

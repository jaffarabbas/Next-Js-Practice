import React from 'react'

const Test = () => {
  return (
    <>
        <style jsx>
            {`
                .main{
                    background-color: red;
                    font-size: 20px;
                }
            `}
        </style>
        <div className='main'>Test</div>
    </>
  )
}

export default Test
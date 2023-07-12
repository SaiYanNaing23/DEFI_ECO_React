import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='text-left px-8 py-12 border rounded-xl'>
                <div>
                    <div className='bg-[var(--primary-blue)] inline-flex p-2 rounded-full mb-4'>
                        {props.icons}
                    </div>

                        <h3 className='font-bold text-xl mb-4'>{props.title}</h3>
                        <p className='font-light text-base'>{props.message}</p>

                </div>
    </div>
  )
}

export default AboutCard;
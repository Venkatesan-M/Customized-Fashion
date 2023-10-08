import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      placeholder='Imagine...'
      rows={5}
      value={prompt}
      onChange={(e)=>{setPrompt(e.target.value)}}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3 justify-center'>
        {generatingImg ? 
        (<CustomButton
          type="outline"
          title="Generating Image..."
          CustomStyles='text-xs'
         />) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={()=>handleSubmit('logo')}
              CustomStyles="text-xs"
            />
            <CustomButton 
              type="filled"
              title="AI Texture"
              handleClick={()=>handleSubmit('full')}
              CustomStyles="text-xs"
            />
          </>
         ) }
      </div>
    </div>
  )
}

export default AIPicker
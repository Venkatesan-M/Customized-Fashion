import React from 'react'
import {SketchPicker} from 'react-color';

import { useSnapshot } from 'valtio';
import state from "../store"
import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div
    className='absolute left-full ml-3'
    >
    <SketchPicker              
      color={snap.color}
      disableAlpha
      presetColors={
     ['#d0021b',
      '#CD5C08',
      '#EFBD48',
      '#8b572a',
      '#7ed321',
      '#417505',
      '#bd10e0',
      '#9013fe',
      '#1F4172',
      '#4a90e2',
      '#50e3c2',
      '#FF3FA4',
      '#FFA1F5',
      '#900C3F',
      '#272829',
      '#4a4a4a',
      '#9b9b9b',
      '#ffffff']}
      onChange={(color)=>{state.color = color.hex} }
    />
    </div>
  )
}

export default ColorPicker
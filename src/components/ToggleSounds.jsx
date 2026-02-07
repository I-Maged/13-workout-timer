import { memo } from 'react'

/* const ToggleSounds = memo(({ allowSound, setAllowSound }) => {
  return (
    <button
      className='btn-sound'
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? '🔈' : '🔇'}
    </button>
  )
}, []) */

const ToggleSounds = ({ allowSound, setAllowSound }) => {
  return (
    <button
      className='btn-sound'
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? '🔈' : '🔇'}
    </button>
  )
}

export default memo(ToggleSounds)

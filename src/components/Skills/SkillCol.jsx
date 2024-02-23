import React from 'react'
import Icon from './Icon'
import PopOut from './PopOut/PopOut'

const SkillCol = ({ name, icons }) => {
    return (
        <div className="icons flex flex-col gap-2 m-12 overflow-y-hidden items-center mx-auto">
            <PopOut text={name} />
            <div className='flex overflow-y-hidden gap-[4rem] flex-wrap justify-center'>
                {
                    icons.map((icon) => {
                        return <Icon key={icon} SVG={icon} />
                    })
                }
            </div>
        </div>
    )
}

export default SkillCol

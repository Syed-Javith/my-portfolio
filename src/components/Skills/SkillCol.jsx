import React from 'react'
import Icon from './Icon'
import PopOut from './PopOut/PopOut'

const SkillCol = ({ name, icons }) => {
    return (
        <div className="icons flex gap-16 m-8 overflow-y-hidden justify-content-center mx-auto">
            <PopOut text={name} />
            {
                icons.map((icon) => {
                    return <Icon key={icon} SVG={icon} />
                })
            }
        </div>
    )
}

export default SkillCol

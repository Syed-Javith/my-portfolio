import React from 'react'
import "./Skills.css"
import SkillCol from './SkillCol'
import { data } from '../../assets/data/icons'
const Skills = () => {
    return (
        <div id="skills">
            {
                data.map((d) => {
                    return <SkillCol key={d.name} name={d.name} icons={d.icons} />
                })
            }
        </div>

    )
}

export default Skills

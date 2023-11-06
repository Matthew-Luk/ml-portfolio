import React from 'react'
import '../css/project.css'
import { LuGithub } from 'react-icons/lu';
import { LuExternalLink } from 'react-icons/lu';

const Project = (props) => {
    const { projectIcon, projectGitHub, projectLink, projectTitle, projectContent, projectFooter } = props

    const parseProjectFooter = (arr) => {
        let str = ""
        for(let i=0;i<arr.length;i++){
            if(i !== arr.length-1){
                str = str + arr[i] + "  ·  "
            }else{
                str = str + arr[i]
            }
        }
        return str
    }

    return (
        <div className='project'>
            <div className='projectHeader'>
                <div className='projectHeaderLeft'>
                    {projectIcon}
                </div>
                <div className='projectHeaderRight'>
                    <a href={projectGitHub} target="_blank" rel="noreferrer"><LuGithub size={"2.4rem"}/></a>
                    <a href={projectLink} target="_blank" rel="noreferrer"><LuExternalLink size={"2.4rem"}/></a>
                </div>
            </div>
            <div className='projectContent'>
                <p className='projectTitle'>{projectTitle}</p>
                <p>{projectContent}</p>
            </div>
            <div className='projectFooter'>
                {parseProjectFooter(projectFooter)}
            </div>
        </div>
    )
}

export default Project
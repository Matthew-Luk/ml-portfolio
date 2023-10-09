import React from 'react'
import '../css/project.css'
import { LuGithub } from 'react-icons/lu';
import { LuExternalLink } from 'react-icons/lu';

const Project = (props) => {
    const { projectIcon, projectGitHub, projectLink, projectTitle, projectContent, projectFooter } = props

    console.log(projectFooter)

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
                    <a href={projectGitHub}><LuGithub size={24}/></a>
                    <a href={projectLink}><LuExternalLink size={24}/></a>
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
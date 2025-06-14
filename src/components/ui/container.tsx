import { ContainerType } from "../../types/componentTypes"


export const Container: React.FC<ContainerType> = ({ children, scss, title,clean=false,cleanGrey=false  }) => {

    return (
        <>
            <div className={`container ${clean && 'container_clean'}  ${cleanGrey && 'container_clean-grey'}`}>

                {title && <div className="container-title" >
                    <h1>{title}</h1>
                </div>}
                <div className={`container-flex  ${scss}`}>
                    {children}
                </div>
            </div>
        </>
    )
}




export const ContainerListItems: React.FC<ContainerType> = ({ children, scss, title,clean=false,cleanGrey=false }) => {

    return (
        <>
            <div className={`container container-list ${clean && 'container_clean'} ${cleanGrey && 'container_clean-grey'}`}>

                {title && <div className="container-title" >
                    <h1>{title}</h1>
                </div>}
                <div className={`container-flex container-list-items ${scss}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Container



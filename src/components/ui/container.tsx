import { ChildrenContextProps } from "../../types/componentTypes"


const Container: React.FC<ChildrenContextProps> = ({ children, scss, title,clean=false }) => {

    return (
        <>
            <div className={`container ${clean && 'container_clean'}`}>

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

export default Container



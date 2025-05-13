import { ChildrenContextProps } from "../../types/componentTypes"


const Container: React.FC<ChildrenContextProps> = ({children,scss}) => {


    return (
        <>
            <div className={`container ${scss}`}>
            {children}
            </div>
        </>
    )
}

export default Container



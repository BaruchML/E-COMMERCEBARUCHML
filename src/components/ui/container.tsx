
import { CartContextProps } from "../../types/componentTypes"

const Container: React.FC<CartContextProps> = ({children,scss}) => {


    return (
        <>
            <div className={`container ${scss}`}>
            {children}
            </div>
        </>
    )
}

export default Container



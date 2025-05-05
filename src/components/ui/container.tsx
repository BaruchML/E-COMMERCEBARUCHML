
import { CartContextProps } from "../../types/componentTypes"

const Container: React.FC<CartContextProps> = ({children,scss = 'divContainer'}) => {


    return (
        <>
            <div className={scss}>
            {children}
            </div>
        </>
    )
}

export default Container



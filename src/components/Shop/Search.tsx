import { ButtonPropType, SearchPropType } from "../../types/uiTypes";
import Button from "../ui/Button";

function withConnect<P extends WithConnectProps>(
    WrappedComponent: React.ComponentType<P>,
    handleEvent?: () => void | string
  ): React.FC<Omit<P, 'handleEvent'>> {
    return function ConnectedComponent(props: Omit<P, 'handleEvent'>) {
      return (
        <div>
          <WrappedComponent {...(props as P)} handleEvent={handleEvent} />
        </div>
      );
    };
  }

  interface WithConnectProps {
    handleEvent?: () => void | string;
  }
function Search({scss,handleEvent}:SearchPropType) {
    const onClick = handleEvent
    return ( 
<div >
        <input style={{width:'auto'}} placeholder="Add todo"/>
        <Button handleEvent={onClick}></Button>
        {/* <label>Hola</label> */}
</div>
     );
}

export default Search;
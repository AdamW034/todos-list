import { Button } from "./buttonsStyling";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice";



const HeaderButton = () => {

  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => dispatch(fetchExampleTasks())}
    >
      Pobierz przykładowe zadania
    </Button>
  )
};

export default HeaderButton;
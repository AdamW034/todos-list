import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";


const TaskPage = () => {
    const {id} = useParams()

    const task = useSelector(state => getTaskById(state, id))

    return (
        <Container>
            <Header title="Szegóły zadania" />
            <Section
                title={id}
                body={task.content}
            />
        </Container>
    )
};

export default TaskPage;
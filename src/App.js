import Author from "./features/author";
import PageHeader from "./common/Navigation";
import Tasks from "./features/tasks/Tasks";
import { LinksLi, NavigationUl, StyledNav } from "./common/Navigation/styled";



const App = () => (
    <BrowserRouter>
        <PageHeader>
            <StyledNav>
                <NavigationUl>
                    <LinksLi><Link to="/zadania">Zadania</Link></LinksLi>
                    <LinksLi><Link to= "/author">O autorze</Link></LinksLi>
                </NavigationUl>
            </StyledNav>
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
            </Switch>
        </PageHeader>
    </BrowserRouter>
);


export default App;
import { HashRouter, NavLink, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import AuthorPage from "./features/author";
import PageHeader from "./common/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { LinksLi, NavigationUl, StyledNav } from "./common/Navigation/styled";



const App = () => (
  <HashRouter>
    <PageHeader>
      <StyledNav>
        <NavigationUl>
          <LinksLi><NavLink to="/zadania" activeClassName = "active" className = "link">Zadania</NavLink></LinksLi>
          <LinksLi><NavLink to="/author" activeClassName = "active" className = "link">O autorze</NavLink></LinksLi>
        </NavigationUl>
      </StyledNav>
    </PageHeader>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
      </Route>
    </Switch>
  </HashRouter>
);


export default App;
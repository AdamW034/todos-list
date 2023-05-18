import { HashRouter, Switch, Route } from "react-router-dom";
import AuthorPage from "./features/author";
import PageHeader from "./common/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { LinksLi, NavigationUl, StyledNav, StyledNavLink } from "./common/Navigation/styled";



const App = () => (
  <HashRouter>
    <PageHeader>
      <StyledNav>
        <NavigationUl>
          <LinksLi><StyledNavLink to="/zadania" activeClassName = "active" className = "link">Zadania</StyledNavLink></LinksLi>
          <LinksLi><StyledNavLink to="/author" activeClassName = "active" className = "link">O autorze</StyledNavLink></LinksLi>
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
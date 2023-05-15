import { HashRouter, NavLink, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Author from "./features/author";
import PageHeader from "./common/Navigation";
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
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/">
      </Route>
    </Switch>
  </HashRouter>
);


export default App;
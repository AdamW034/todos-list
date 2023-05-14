import { BrowserRouter, Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Author from "./features/author";
import PageHeader from "./common/Navigation";
import Tasks from "./features/tasks/Tasks";
import { LinksLi, NavigationUl, StyledNav } from "./common/Navigation/styled";



const App = () => (
  <BrowserRouter>
    <PageHeader>
      <StyledNav>
        <NavigationUl>
          <LinksLi><Link to="/zadania" className = "link">Zadania</Link></LinksLi>
          <LinksLi><Link to="/author" className = "link">O autorze</Link></LinksLi>
        </NavigationUl>
      </StyledNav>
    </PageHeader>
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/author">
        <Author />
      </Route>
    </Switch>
  </BrowserRouter>
);


export default App;
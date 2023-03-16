import FormContainer from './FormContainer';

function App() {
  return (
    <main className="container">
    <header className="header">
        <h1 className="header__header">Lista zadań</h1>
    </header>
        <section className="section">
            <div className="section__container">
                <h2 className="section__header">Dodaj nowe zadanie</h2>
            </div>
           <FormContainer />
        </section>
        <section className="section">
            <div className="section__container section__container--toggleTasksDone">
                <h2 className="section__header">Lista zadań</h2>
                <div className="js-buttons">
                </div>
            </div>
            <div className="section__container">
                <ul className="section__list js-list">
                </ul>
            </div>
        </section>
    </main>
  );
}

export default App;

import React from 'react';


export default function Header() {
  return (
    <Router>
    <header className="header">
      <h1 className="header__title h1-title">Kristen's Kitchen</h1>
      <ul className="header__about/contact">
        <li>about</li>
        <li>contact</li>
      </ul>
    </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/first-aid-101" component={FirstAid101} />
        <Route path="/lesson/:courseId" component={FirstAid101Individual} />
        <Route path="/about" component={About} />
        <Route path="/dashboard/no-progress" component={Dashboard_notLoggedIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/quiz/:quizId" component={Quiz} />
        <Route path="/notLoggedIn" component={QuizNotLoggedIn} />
        <Route path="/results" component={Results} />
        <Route path="/lesson-not-found" component={LessonNotFound} />
      </Switch>
    </Router>
  );


}

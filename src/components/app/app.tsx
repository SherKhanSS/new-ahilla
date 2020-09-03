import * as React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state";
import Main from "../main/main";
import {getArticles, getGenres, getPromoFilm, getFilmsByGenre} from "../../reducer/data/selectors";
import {getCurrentGenre, getFilmsLength} from "../../reducer/app-state/selectors";
import {getAuthorizationStatus, getOnReviewSuccess, getShowSendError, getFavoritesFilms, getReviews, getIsSent} from "../../reducer/user/selectors";
import {Operation as UserOperation, ActionCreator as UserActionCreator, AuthorizationStatus} from "../../reducer/user/user";
import Loader from "../loader/loader";
import history from "../../history";
import PrivateRoute from "../private-route/private-route";
import {Articles} from "../../types";
import Header from "../header/header";
import Footer from "../footer/footer";

interface Props {
  articles: Articles[];
}

class App extends React.PureComponent<Props, {}> {
  render() {
    const {articles} = this.props;

    // if (films === null || promoFilm === null || genres === null) {
    //   return (
    //     <Loader />
    //   );
    // }

    return (
      <>
        <Header />
          <Router
            history={history}
          >
            <Switch>
              <Route exact path="/">
                <Main
                  articles={articles}
                />
              </Route>
            </Switch>
          </Router>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: getArticles(state),
  genres: getGenres(state),
  films: getFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  favoritesFilms: getFavoritesFilms(state),
  currentGenre: getCurrentGenre(state),
  filmsLength: getFilmsLength(state),
  authorizationStatus: getAuthorizationStatus(state),
  onReviewSuccess: getOnReviewSuccess(state),
  showSendError: getShowSendError(state),
  reviews: getReviews(state),
  isSent: getIsSent(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenresItemClick(genre) {
    dispatch(ActionCreator.changeCurrentGenre(genre));
    dispatch(ActionCreator.dropFilmsLength());
  },

  onShowMoreClick() {
    dispatch(ActionCreator.changeFilmsLength());
  },

  onPlayerExitClick() {
    dispatch(ActionCreator.dropIsPlayingFilm());
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  sendReview(id, reviewData) {
    dispatch(UserOperation.sendReview(id, reviewData));
    dispatch(UserActionCreator.activateSent());
  },

  onAddButtonClick(id, status) {
    dispatch(UserOperation.addFilmsToFavorites(id, status));
  },

  onFilmCardClick(id) {
    dispatch(UserOperation.loadReview(id));
  },

  onClosingReview() {
    dispatch(UserActionCreator.setShowSendError(false));
    dispatch(UserActionCreator.sendReview(false));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

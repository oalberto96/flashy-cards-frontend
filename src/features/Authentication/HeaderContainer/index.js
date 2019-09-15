import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../../components/common/Header";
import { Auth } from "../../../agent";
import { logout } from "../actions";

const HeaderContainer = () => {
  const isAuthenticated = useSelector(
    store => store.authentication.isAuthenticated
  );
  const username = useSelector(store =>
    store.authentication.user ? store.authentication.user.username : null
  );
  const dispatch = useDispatch();
  return (
    <Header
      isAuthenticated={isAuthenticated}
      username={username}
      onLogoutClick={() => {
        Auth.clearCookies();
        Auth.removeHeaders();
        dispatch(logout());
      }}
    ></Header>
  );
};

export default HeaderContainer;

import * as React from "react";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { $session, $isAuthenticated } from "@features/shared/session";
import { isAdmin } from "@lib/isAdmin";

export const HomePage = () => {
  const currentUser = useStore($session);
  const isAuthenticated = useStore($isAuthenticated);

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <Link to="/auth">go to auth</Link>
          <br />
          <Link to="register">go to register</Link>
        </div>
      )}

      {isAdmin(currentUser) && (
        <>
          <Link to="/authorsPanel">go to author panel</Link>
          <br />
          <Link to="/users">go to users</Link>
          <br />
          <Link to="/genres">go to genre</Link>
        </>
      )}
      <br />
      <Link to="/books">go to books panel</Link>
      <br />
      <Link to="/myBooks">go to my books</Link>
    </div>
  );
};

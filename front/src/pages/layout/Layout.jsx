import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import S from "./style";
import { useBackground } from "../../contexts/BackgroundContext";
import LogoutPopup from "./LogoutPopup";

const Layout = () => {
  const { backgroundImage } = useBackground();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowLogoutPopup(false);
    navigate("/"); // 홈으로 이동
  };


  return (
    <S.Container>
      <S.Background style={{ backgroundImage: `url(${backgroundImage})` }} />

      <S.Header>
        <S.HeaderContent>
          <Link to="/">
            <S.Logo src="/assets/images/logo.png" alt="logo" />
          </Link>

          <S.Nav>
            <Link to="/category">category</Link>
            <Link to="/archive">archive</Link>
            <Link to="/community">community</Link>
            <Link to="/mypage">my page</Link>
          </S.Nav>
          <S.Login>
            {isLoggedIn ? (
              <button onClick={handleLogout}>logout</button>
            ) : (
              <Link to="/login">login</Link>
            )}
          </S.Login>
        </S.HeaderContent>
      </S.Header>

      <S.Wrapper>
        <Outlet />
      </S.Wrapper>

      {showLogoutPopup && (
        <LogoutPopup
          title="로그아웃 하시겠습니까?"
          onConfirm={confirmLogout}
          onCancel={() => setShowLogoutPopup(false)}
        />
      )}

    </S.Container>
  );
};

export default Layout;


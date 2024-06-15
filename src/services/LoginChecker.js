import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { verifyToken } from '../redux/actions/loginActions';
import LoadingScreen from '../components/common/login-checker/LoadingScreen';

export default function LoginChecker(props) {
  const presentApiKey = useRef(localStorage.getItem("apiKey"));
  const token = useSelector((state) => state.token);
  const tokenVerification = useSelector((state) => state.tokenVerification);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (presentApiKey.current) {
      verifyToken(presentApiKey.current, dispatch);
    }
  }, []);

  useEffect(() => {
    if (token.fetched && token.error) {
      history.push("/login?message=Lejárt%20a%20tokened!%20Kérlek%20jelentkezz%20be%20újra!");
    }
  }, [token])

  console.log(token);

  if (presentApiKey.current == null || (token.fetched && !token.error)) {
    return props.children;

  } else if (tokenVerification.fetched && tokenVerification.error) {
    return props.children;

  } else {
    return <LoadingScreen />;
  } 
}
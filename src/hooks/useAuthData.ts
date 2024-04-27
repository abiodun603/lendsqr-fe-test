'use client'

import React, { useEffect, useState } from 'react';

const useAuthData = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedData = localStorage.getItem('authData');
    if (storedData) {
      try {
        const { email, isLoggedIn } = JSON.parse(storedData);
        setEmail(email);
        setIsLoggedIn(isLoggedIn === true);
      } catch (error) {
        console.error('Error parsing authData from localStorage:', error);
      }
    }
  }, []);

  return { email, isLoggedIn };
};

export default useAuthData;

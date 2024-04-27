'use client'

import { useEffect, useState } from 'react';

const useLocalStorageEmail = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('authData');
    if (storedEmail) {
      try {
        const { email } = JSON.parse(storedEmail);
        setEmail(email);
      } catch (error) {
        console.error('Error parsing email from localStorage:', error);
      }
    }
  }, []);

  return {email};
};

export default useLocalStorageEmail;
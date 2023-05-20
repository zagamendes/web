import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SignIn: React.FC = () => {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`}
      className="flex gap-2 hover:text-gray-50 w-[300px]"
    >
      <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon={faUser} className="text-grey-500" />
      </div>
      <p className="max-w-[170px]">Crie sua conta e salve suas memórias!</p>
    </a>
  );
};

export default SignIn;

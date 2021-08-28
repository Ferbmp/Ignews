import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { session, signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export const SignInButton = () => {
   const [sessions] = useSession();

   return sessions ? (
      <button
         type='button'
         className={styles.signInButton}
         onClick={() => signOut()}
      >
         <FaGithub color='#04d361' />
         {sessions.user.name}
         <FiX color='#030303' className={styles.closeIcon} />
      </button>
   ) : (
      <button
         type='button'
         className={styles.signInButton}
         onClick={() => signIn("github")}
      >
         <FaGithub color='#eba417' />
         Sign In With Github
      </button>
   );
};

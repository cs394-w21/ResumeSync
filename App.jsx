import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import useResume from "./src/hooks/useResume";
import Loading from "./expo-components/Loading";
import ResumeForm from "./expo-components/ResumeForm";
import LoginForm from "./expo-components/LoginForm";
import useUser, { UserProvider } from "./expo-utils/useUser";

// nervous-line.sh/josh-hoeflich
const EditResume = () => {
  const user = useUser();
  const { loading, resume } = useResume(user.userName);
  if (loading) return <Loading />;
  return <ResumeForm resume={resume} />;
};

const AuthChecker = ({ children }) => {
  const user = useUser();
  if (!user.auth) return <LoginForm />;
  return <>{children}</>;
};

AuthChecker.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => (
  <UserProvider>
    <AuthChecker>
      <EditResume />
    </AuthChecker>
  </UserProvider>
);

export default App;

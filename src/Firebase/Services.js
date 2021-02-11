import firebase from './Firebase';

export const authentication = async (email, password) => {
  var result = {
    status: null,
    data: null,
  };

  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      result.status = true;
      result.data = user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      result.status = false;
      result.data = errorMessage;
    });
  return result;
};

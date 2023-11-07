export function formatFirebaseAuthErrorMessage(error) {
    switch (error.code) {
      case "auth/wrong-password":
        return "Incorrect password.";
      case "auth/user-not-found":
        return "Email not found.";
      case "auth/invalid-email":
        return "Invalid email format.";
      case "auth/too-many-requests":
        return "Too many login attempts. Please try again later.";
      case "auth/email-already-in-use":
        return "Email already in use.";
      case "auth/weak-password":
        return "Weak password.";
      default:
        return error.message || "An error occurred.";
    }
  }
  
export function translate(message) {
  if (message === "The email address is already in use by another account.") {
    return "Ten e-mail już jest przypisany do konta.";
  }
  if (message === "Password should be at least 6 characters") {
    return "Hasło musi zawierać minimum 6 znaków.";
  }
  if (message === "The email address is badly formatted.") {
    return "Błędny adres e-mail.";
  }
  if (
    message === "The password is invalid or the user does not have a password."
  ) {
    return "Nieprawidłowe hasło.";
  }
  if (
    message ===
    "There is no user record corresponding to this identifier. The user may have been deleted."
  ) {
    return "Brak użytkownika z podanym e-mailem. Sprawdź jeszcze raz i spróbuj ponownie.";
  }
  if (
    message ===
    "We have blocked all requests from this device due to unusual activity. Try again later."
  ) {
    return "Zbyt podejrzana aktywność z tego urządzenia. Spróbuj ponownie później.";
  }
  if (
    message ===
    "This operation is sensitive and requires recent authentication. Log in again before retrying this request."
  ) {
    return "Ta operacja wymaga niedawnego uwierzytelnienia. Zaloguj się ponownie przed ponowną próbą zmiany hasła.";
  }
  return message;
}

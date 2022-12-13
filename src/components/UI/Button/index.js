import "/src/components/UI/Button/styles.scss";

export const Button = (text, isLoginSocial = false) => {
  return `
    <button class=${isLoginSocial ? "social" : "primary"}>
      ${isLoginSocial ? `<img src="/google-logo.svg" alt="Google Logo" />` : ""}
      ${text}
    </button>
  `;
}
import "/src/components/UI/Link/styles.scss";

export const Link = (text, href = "#", isSmall = false) => {
  return `
    <a class=${isSmall ? "sm" : "normal"} href=${href}>${text}</a>
  `;
};
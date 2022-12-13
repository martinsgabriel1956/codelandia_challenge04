import '/src/components/Form/Input/styles.scss';

export const Input = (labelText, type = "text") => {
  return `
    <div class="input-container">
      <label htmlFor="input">${labelText}</label>
      <input id="input" type=${type} />
    </div>
  `;
}
export default function Input({ label, value, type, setValue }) {
  return (
    <fieldset>
      <legend>{label}:</legend>
        <input
          placeholder={label}
          value={value}
          type={type}
          onChange={(event) => setValue(event.target.value)}
        />
    </fieldset>
  );
}

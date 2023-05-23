type PropsType = {
  children: JSX.Element;
  label: string;
  user: string;
};

export function Header({ children, label, user }: PropsType) {
  const title = "Formularios Forever";
  const h2 = "And Ever";

  return (
    <>
      <header className="header">
        <h2>{h2.toUpperCase}</h2>
      </header>
      {children ? (
        <>
          <p>{user}</p>
        </>
      ) : (
        <p>{title.toLocaleUpperCase()}</p>
      )}

      {children}
    </>
  );
}

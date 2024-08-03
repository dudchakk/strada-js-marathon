import Button from "./Button";

const Header = () => {
  const onClickHandle = () => {
    console.log("clicked");
  };

  return (
    <header>
      <h1>Task Tracker</h1>
      <Button text="Add" onClickHandle={onClickHandle} />
    </header>
  );
};

export default Header;
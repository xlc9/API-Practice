import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Please chill, data is still loading </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1> Fetch data from an API in react </h1>
      {items.map((item) => (
        <ul key={item.id}>
          <li>
            User_Name: {item.username}
            <br /> Full_Name: {item.name}
            <br /> User_Email: {item.email}
            <br />Address: {item.address.street}
            <br />City: {item.address.city}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
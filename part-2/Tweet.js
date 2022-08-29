function Tweet( { username, name, date, message }){

  const styles =  {
    color : "blue",
    backgroundColor: "green",
  }

  return (
    <div>
      <h4 style={styles}> { username } </h4>
      <h5> { name } </h5>
      <h6> { date } </h6>
      <p> {message} </p>
    </div>
  );
}
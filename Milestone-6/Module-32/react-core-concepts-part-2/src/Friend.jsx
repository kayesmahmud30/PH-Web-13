export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, phone } = friend;

  return (
    <div className="card">
      <h4>Name: {name} </h4>
      <p email={email}>Email: {email}</p>
      <p phone={phone}>Phone: {phone}</p>
    </div>
  );
}

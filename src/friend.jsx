export default function SingleFriend({ frnd }) {
  const { name, email } = frnd;
  return (
    <div>
      <h3>name : {name}</h3>
      <p>email : {email}</p>
    </div>
  );
}

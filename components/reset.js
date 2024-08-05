export const RsetTemp = ({ email, resetPasswordToken }) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <a
      href={`http://localhost:3000/authentification/reset?token=${resetPasswordToken}`}
    >
      reset
    </a>
  </div>
);

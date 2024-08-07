export const ResetPasswordTemplate = ({ email, resetPasswordToken }) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <a
      href={`http://localhost:3000/authentification/reset-password?token=${resetPasswordToken}`}
    >
      reset
    </a>
  </div>
);

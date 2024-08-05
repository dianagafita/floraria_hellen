export const VerEmailTemp = ({ email, emailVerificationToken }) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <a
      href={`http://localhost:3000/authentification/verify-email?token=${emailVerificationToken}`}
    >
      reset
    </a>
  </div>
);

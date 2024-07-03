import AuthForm from "./auth _form";

export default function AuthFormPage({ searchParams }) {
  const formMode = searchParams.mode || "login";

  return <AuthForm mode={formMode} />;
}

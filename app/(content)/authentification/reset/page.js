import ResetPasswordForm from "./form";
import ChangePasswordForm from "./changepass";
import prisma from "@/lib/prisma";

const ResetPasswordPage = async ({ searchParams }) => {
  if (searchParams.token) {
    const user = await prisma.user.findUnique({
      where: {
        resetPasswordToken: searchParams.token,
      },
    });
    if (!user) {
      return <div>Invalid token</div>;
    }

    return <ChangePasswordForm resetPasswordToken={searchParams.token} />;
  } else {
    return <ResetPasswordForm />;
  }
};

export default ResetPasswordPage;

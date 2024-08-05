import prisma from "@/lib/prisma";

const VerifyEmailPage = async ({ searchParams }) => {
  if (searchParams.token) {
    const user = await prisma.user.findUnique({
      where: {
        emailVerificationToken: searchParams.token,
      },
    });
    if (!user) {
      return <div>Invalid token</div>;
    }

    await prisma.user.update({
      where: { emailVerificationToken: searchParams.token },
      data: {
        emailVerified: true,
        emailVerificationToken: null,
      },
    });
    return (
      <div>
        <h1>Email verified</h1>
      </div>
    );
  } else {
    return (
      <div>
        <p>No token found</p>
      </div>
    );
  }
};

export default VerifyEmailPage;

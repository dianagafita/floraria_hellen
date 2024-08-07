import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const VerifyEmailPage = async ({ searchParams }) => {
  if (searchParams.token) {
    const user = await prisma.user.findUnique({
      where: {
        emailVerificationToken: searchParams.token,
      },
    });
    if (!user) {
      redirect("/authentification/verify-email");
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
        <p className="text-center text-2xl font-[200] my-20">
          Adresa de E-mail confirmata cu succes!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-center text-2xl font-[200] my-20">
          Nu s-a gasit token-ul. Reincercati!
        </p>
      </div>
    );
  }
};

export default VerifyEmailPage;

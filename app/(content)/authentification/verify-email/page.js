// // import prisma from "@/lib/prisma";
// // import { redirect } from "next/navigation";

// // const VerifyEmailPage = async ({ searchParams }) => {
// //   if (searchParams.token) {
// //     const user = await prisma.user.findUnique({
// //       where: {
// //         emailVerificationToken: searchParams.token,
// //       },
// //     });
// //     if (!user) {
// //       redirect("/authentification/verify-email");
// //     }

// //     await prisma.user.update({
// //       where: { emailVerificationToken: searchParams.token },
// //       data: {
// //         emailVerified: true,
// //         emailVerificationToken: null,
// //       },
// //     });
// //     return (
// //       <div className="min-h-[80vh] ">
// //         <p className="text-center text-2xl font-[200] my-20">
// //           Adresa de E-mail confirmata cu succes!
// //         </p>
// //       </div>
// //     );
// //   } else {
// //     return (
// //       <div className="min-h-[80vh]">
// //         <p className="text-center text-2xl font-[200] my-20">
// //           Nu s-a gasit token-ul. Reincercati!
// //         </p>
// //       </div>
// //     );
// //   }
// // };

// // export default VerifyEmailPage;
// // // app/authentification/verify-email/page.js
// // // import jwt from "jsonwebtoken";
// // // import prisma from "@/lib/prisma";
// // // import { redirect } from "next/navigation";
// // // import { hashUserPassword } from "@/lib/hash";
// // // import { createAuthSession } from "@/lib/auth";

// // // const JWT_SECRET = process.env.JWT_SECRET;

// // // const VerifyEmailPage = async ({ searchParams }) => {
// // //   const { token } = searchParams;

// // //   if (token) {
// // //     try {
// // //       const decoded = jwt.verify(token, JWT_SECRET);
// // //       const hashedPassword = hashUserPassword(decoded.password);

// // //       // const userId = await prisma.user.create({
// // //       //   data: {
// // //       //     email: decoded.email,
// // //       //     first_name: decoded.firstName,
// // //       //     second_name: decoded.secondName,
// // //       //     phone: decoded.phone,
// // //       //     password: hashedPassword,
// // //       //     emailVerified: true,
// // //       //   },
// // //       // });
// // //       // console.log(userId);

// // //       // await createAuthSession(userId.id);
// // //       console.log("DADDADADADDAS");
// // //     } catch (error) {
// // //       console.error(error);
// // //       return (
// // //         <div className="min-h-[80vh]">
// // //           <p className="text-center text-2xl font-[200] my-20">
// // //             Token-ul de verificare este invalid sau a expirat. Reincercati!
// // //           </p>
// // //         </div>
// // //       );
// // //     }
// // //   } else {
// // //     return (
// // //       <div className="min-h-[80vh]">
// // //         <p className="text-center text-2xl font-[200] my-20">
// // //           Nu s-a gasit token-ul. Reincercati!
// // //         </p>
// // //       </div>
// // //     );
// // //   }
// // // };

// // // export default VerifyEmailPage;
// "use server";
// import jwt from "jsonwebtoken";
// import prisma from "@/lib/prisma";
// import { redirect } from "next/navigation";
// import { hashUserPassword } from "@/lib/hash";
// import { createAuthSession } from "@/lib/auth";
// import { createUser } from "@/lib/user";

// const JWT_SECRET = process.env.JWT_SECRET;

// const VerifyEmailPage = async ({ searchParams }) => {
//   const { token } = searchParams;

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);
//       const hashedPassword = hashUserPassword(decoded.password);

//       const userId = await createUser(
//         decoded.email,
//         decoded.firstName,
//         decoded.secondName,
//         decoded.phone,
//         hashedPassword
//       );

//       await createAuthSession(userId);

//       redirect("/profile");
//     } catch (error) {
//       console.error(error);
//       return (
//         <div className="min-h-[80vh]">
//           <p className="text-center text-2xl font-[200] my-20">
//             Token-ul de verificare este invalid sau a expirat. Reincercati!
//           </p>
//         </div>
//       );
//     }
//   } else {
//     return (
//       <div className="min-h-[80vh]">
//         <p className="text-center text-2xl font-[200] my-20">
//           Nu s-a gasit token-ul. Reincercati!
//         </p>
//       </div>
//     );
//   }
// };

// export default VerifyEmailPage;
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage({ searchParams }) {
  const { token } = searchParams;
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await fetch("/api/session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            router.push("/profile");
          } else {
            const errorData = await response.json();
            setError(errorData.error || "An unknown error occurred.");
          }
        } catch (error) {
          setError("Failed to verify token. Please try again.");
        }
      } else {
        setError("No token found. Please try again.");
      }
    };

    verifyToken();
  }, [token, router]);

  return (
    <div className="min-h-[80vh]">
      {error ? (
        <p className="text-center text-2xl font-[200] my-20">{error}</p>
      ) : (
        <p className="text-center text-2xl font-[200] my-20">
          Verifying your token...
        </p>
      )}
    </div>
  );
}

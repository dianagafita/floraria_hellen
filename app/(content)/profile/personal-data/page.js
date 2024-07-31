// // // "use client";
// // // import Button from "@/components/util/button";
// // // import Input from "@/components/util/input";
// // // import Title from "@/components/util/title";
// // // import { useEffect, useState } from "react";

// // // export default function PersonalDataPage() {
// // //   const [user, setUser] = useState(null);

// // //   useEffect(() => {
// // //     const fetchAuthStatus = async () => {
// // //       const response = await fetch("/api/valid");
// // //       const data = await response.json();
// // //       if (data.user) {
// // //         const userResponse = await fetch(`/api/user/${data.user.id}`);
// // //         const userData = await userResponse.json();
// // //         setUser(userData);
// // //       }
// // //     };

// // //     fetchAuthStatus();
// // //   }, []);

// // //   return (
// // //     <div className="flex flex-col md:flex-row p-5 w-full ">
// // //       <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 text-center border rounded">
// // //         <Title>
// // //           DATE PERSONALE
// // //           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
// // //             Editeaza datele personale asociate contului tau
// // //           </span>
// // //         </Title>
// // //         <form className="flex flex-col items-center text-start">
// // //           <div className="flex md:flex-col lg:flex-row w-full">
// // //             <Input
// // //               name="firstName"
// // //               label="Prenume"
// // //               placeholder={user?.second_name}
// // //             />
// // //             <Input
// // //               name="secondName"
// // //               label="Nume"
// // //               placeholder={user?.first_name}
// // //             />
// // //           </div>
// // //           <div className="flex-row md:flex-col lg:flex-row w-full">
// // //             <Input name="email" label="Email" placeholder={user?.email} />
// // //             <Input name="phone" label="Telefon" placeholder={user?.phone} />
// // //           </div>{" "}
// // //           <Button moreStyle=" w-[50%] md:w-[90%] lg:w-[50%]  items-center mt-10">
// // //             Salveaza
// // //           </Button>
// // //         </form>
// // //       </div>
// // //       <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 text-center border rounded">
// // //         <Title>
// // //           SCHIMBA PAROLA
// // //           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
// // //             Editeaza parola asociata contului tau
// // //           </span>
// // //         </Title>
// // //         <form className="flex flex-col items-center text-start w-full ">
// // //           <Input name="password" label="Parola veche" type="password" />
// // //           <div className="flex md:flex-col lg:flex-row w-full">
// // //             <Input name="newPassword" label="Parola noua" />
// // //             <Input name="newPasswordConfirm" label="Confirma parola noua" />
// // //           </div>
// // //           <Button moreStyle="w-[50%] lg:w-[50%] md:w-[90%] mx-auto md:mt-[136px] mt-10 ">
// // //             Schimba parola
// // //           </Button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import Button from "@/components/util/button";
// // import Input from "@/components/util/input";
// // import Title from "@/components/util/title";
// // import { useEffect, useState } from "react";

// // export default function PersonalDataPage() {
// //   const [user, setUser] = useState(null);
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     secondName: "",
// //     email: "",
// //     phone: "",
// //   });

// //   useEffect(() => {
// //     const fetchAuthStatus = async () => {
// //       const response = await fetch("/api/valid");
// //       const data = await response.json();
// //       if (data.user) {
// //         const userResponse = await fetch(`/api/user/${data.user.id}`);
// //         const userData = await userResponse.json();
// //         setUser(userData);
// //         setFormData({
// //           firstName: userData.first_name || "",
// //           secondName: userData.second_name || "",
// //           email: userData.email || "",
// //           phone: userData.phone || "",
// //         });
// //       }
// //     };

// //     fetchAuthStatus();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // if (formData.newPassword !== formData.newPasswordConfirm) {
// //     //   alert("Passwords do not match");
// //     //   return;
// //     // }

// //     try {
// //       const response = await fetch(`/api/user/update`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ id: user.id, ...formData }),
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert("User updated successfully");
// //       } else {
// //         alert(result.error || "Failed to update user");
// //       }
// //     } catch (error) {
// //       console.error("Error updating user:", error);
// //       alert("An error occurred while updating the user");
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col md:flex-row p-5 w-full">
// //       <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 text-center border rounded">
// //         <Title>
// //           DATE PERSONALE
// //           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
// //             Editeaza datele personale asociate contului tau
// //           </span>
// //         </Title>
// //         <form
// //           className="flex flex-col items-center text-start"
// //           onSubmit={handleSubmit}
// //         >
// //           <div className="flex md:flex-col lg:flex-row w-full">
// //             <Input
// //               name="firstName"
// //               label="Prenume"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               placeholder="Prenume"
// //             />
// //             <Input
// //               name="secondName"
// //               label="Nume"
// //               value={formData.secondName}
// //               onChange={handleChange}
// //               placeholder="Nume"
// //             />
// //           </div>
// //           <div className="flex md:flex-col lg:flex-row w-full">
// //             <Input
// //               name="email"
// //               label="Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Email"
// //             />
// //             <Input
// //               name="phone"
// //               label="Telefon"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               placeholder="Telefon"
// //             />
// //           </div>
// //           <Button
// //             type="submit"
// //             moreStyle=" w-[50%] md:w-[90%] lg:w-[50%] items-center mt-10"
// //           >
// //             Salveaza
// //           </Button>
// //         </form>
// //       </div>
// //       <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 text-center border rounded">
// //         <Title>
// //           SCHIMBA PAROLA
// //           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
// //             Editeaza parola asociata contului tau
// //           </span>
// //         </Title>
// //         <form
// //           className="flex flex-col items-center text-start w-full"
// //           onSubmit={handleSubmit}
// //         >
// //           <Input
// //             name="password"
// //             label="Parola veche"
// //             type="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //           />
// //           <div className="flex md:flex-col lg:flex-row w-full">
// //             <Input
// //               name="newPassword"
// //               label="Parola noua"
// //               type="password"
// //               value={formData.newPassword}
// //               onChange={handleChange}
// //             />
// //             <Input
// //               name="newPasswordConfirm"
// //               label="Confirma parola noua"
// //               type="password"
// //               value={formData.newPasswordConfirm}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <Button
// //             type="submit"
// //             moreStyle="w-[50%] lg:w-[50%] md:w-[90%] mx-auto md:mt-[136px] mt-10"
// //           >
// //             Schimba parola
// //           </Button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import { useFormState } from "react-dom";
// // import Button from "@/components/util/button";
// // import Input from "@/components/util/input";
// // import Title from "@/components/util/title";
// // import { useEffect, useState } from "react";
// // import { updatePassword, updateUser } from "@/actions/user-actions";
// // import { toast } from "react-toastify";
// // import "@/app/globals.css";
// // export default function PersonalDataPage() {
// //   const [user, setUser] = useState(null);
// //   const [formState, formAction] = useFormState(updateUser, {});
// //   const [error, setError] = useState();
// //   useEffect(() => {
// //     const fetchAuthStatus = async () => {
// //       const response = await fetch("/api/valid");
// //       const data = await response.json();
// //       if (data.user) {
// //         const userResponse = await fetch(`/api/user/${data.user.id}`);
// //         const userData = await userResponse.json();
// //         setUser(userData);
// //       }
// //     };

// //     fetchAuthStatus();
// //   }, []);
// //   const [secondFormState, secondFormAction] = useFormState(
// //     updatePassword.bind(null, user?.email),
// //     {}
// //   );

// //   useEffect(() => {
// //     if (formState.success) {
// //       toast.success(formState.message, {
// //         className: "toast-success-message",
// //         position: "bottom-right",
// //         theme: "colored",
// //       });
// //     } else if (formState.error) {
// //       toast.error(formState.error, {
// //         className: "toast-error-message",
// //         position: "bottom-right",
// //         theme: "colored",
// //       });
// //     }
// //   }, [formState]);

// //   useEffect(() => {
// //     console.log(secondFormState);
// //     if (secondFormState.success) {
// //       console.log("djjdjdjdj", secondFormState.message);
// //       toast.success(secondFormState.message, {
// //         className: "toast-success-message",
// //         position: "bottom-right",
// //         theme: "colored",
// //       });
// //     } else {
// //       toast.error(secondFormState.message, {
// //         className: "toast-error-message",
// //         position: "bottom-right",
// //         theme: "colored",
// //       });
// //     }
// //   }, [secondFormState]);
// //   console.log(error);

// //   return (
// //     <div className="flex flex-col md:flex-row p-5 w-full mt-5 mb-10">
// //       <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 md:mx-2 text-center border rounded">
// //         <Title>
// //           DATE PERSONALE
// //           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
// //             Editeaza datele personale asociate contului tau
// //           </span>
// //         </Title>
// //         <form
// //           className="flex flex-col items-center text-start"
// //           action={formAction}
// //         >
// //           <input type="hidden" name="id" value={user?.id} />
// //           <div className="flex md:flex-col lg:flex-row w-full">
// //             <Input
// //               defaultValue={user?.first_name}
// //               name="firstName"
// //               label="Prenume"
// //               // placeholder={user?.first_name}
// //             />
// //             <Input
// //               name="secondName"
// //               label="Nume"
// //               defaultValue={user?.second_name}
// //             />
// //           </div>
// //           <div className="flex-row md:flex-col lg:flex-row w-full">
// //             <Input name="email" label="Email" defaultValue={user?.email} />
// //             <Input name="phone" label="Telefon" defaultValue={user?.phone} />
// //           </div>
// //           <Button moreStyle="w-[50%] md:w-[90%] lg:w-[50%] items-center mt-10">
// //             Salveaza
// //           </Button>
// //         </form>
// //       </div>
// //       <div className="pb-10 mb-9 md:mb-0 flex flex-col w-full py-5 px-2 md:mx-2 text-center border rounded">
// //         <Title>
// //           SCHIMBA PAROLA
// //           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
// //             Editeaza parola asociata contului tau
// //           </span>
// //         </Title>
// //         <form
// //           className="flex flex-col items-center text-start w-full"
// //           action={secondFormAction}
// //         >
// //           <input type="hidden" name="id" value={user?.id} />
// //           <Input name="currentPassword" label="Parola veche" type="password" />
// //           <div className="flex md:flex-col lg:flex-row w-full">
// //             <Input name="newPassword" label="Parola noua" type="password" />
// //             <Input
// //               name="confirmNewPassword"
// //               label="Confirma parola noua"
// //               type="password"
// //             />
// //           </div>

// //           <Button moreStyle="w-[50%] lg:w-[50%] md:w-[90%] mx-auto md:mt-[128px] mt-10">
// //             Schimba parola
// //           </Button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useFormState } from "react-dom";
// import { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Button from "@/components/util/button";
// import Input from "@/components/util/input";
// import Title from "@/components/util/title";
// import { updatePassword, updateUser } from "@/actions/user-actions";
// import "@/app/globals.css";

// export default function PersonalDataPage() {
//   const [user, setUser] = useState(null);
//   const [initialUserData, setInitialUserData] = useState(null);
//   const [formState, formAction] = useFormState(updateUser, {});
//   const [secondFormState, secondFormAction] = useFormState(
//     updatePassword.bind(null, user?.email),
//     {}
//   );
//   const [isFormChanged, setIsFormChanged] = useState(false);

//   useEffect(() => {
//     const fetchAuthStatus = async () => {
//       const response = await fetch("/api/valid");
//       const data = await response.json();
//       if (data.user) {
//         const userResponse = await fetch(`/api/user/${data.user.id}`);
//         const userData = await userResponse.json();
//         setUser(userData);
//         setInitialUserData(userData);
//       }
//     };

//     fetchAuthStatus();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//     if (initialUserData && value !== initialUserData[name]) {
//       setIsFormChanged(true);
//     } else if (
//       initialUserData &&
//       value === initialUserData[name] &&
//       !Object.keys(user).some((key) => user[key] !== initialUserData[key])
//     ) {
//       setIsFormChanged(false);
//     }
//   };

//   useEffect(() => {
//     if (formState.success) {
//       toast.success(formState.message, {
//         className: "toast-success-message",
//         position: "bottom-right",
//         theme: "colored",
//       });
//     } else if (formState.error) {
//       toast.error(formState.error, {
//         className: "toast-error-message",
//         position: "bottom-right",
//         theme: "colored",
//       });
//     }
//   }, [formState]);

//   useEffect(() => {
//     if (secondFormState.success) {
//       toast.success(secondFormState.message, {
//         className: "toast-success-message",
//         position: "bottom-right",
//         theme: "colored",
//       });
//     } else {
//       toast.error(secondFormState.error, {
//         className: "toast-error-message",
//         position: "bottom-right",
//         theme: "colored",
//       });
//     }
//   }, [secondFormState]);

//   return (
//     <div className="flex flex-col md:flex-row p-5 w-full mt-5 mb-10">
//       <ToastContainer />
//       <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 md:mx-2 text-center border rounded">
//         <Title>
//           DATE PERSONALE
//           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
//             Editeaza datele personale asociate contului tau
//           </span>
//         </Title>
//         <form
//           className="flex flex-col items-center text-start"
//           action={formAction}
//         >
//           <input type="hidden" name="id" value={user?.id} />
//           <div className="flex md:flex-col lg:flex-row w-full">
//             <Input
//               defaultValue={user?.first_name}
//               name="firstName"
//               label="Prenume"
//               onChange={handleInputChange}
//             />
//             <Input
//               name="secondName"
//               label="Nume"
//               defaultValue={user?.second_name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex-row md:flex-col lg:flex-row w-full">
//             <Input
//               name="email"
//               label="Email"
//               defaultValue={user?.email}
//               onChange={handleInputChange}
//             />
//             <Input
//               name="phone"
//               label="Telefon"
//               defaultValue={user?.phone}
//               onChange={handleInputChange}
//             />
//           </div>
//           <Button
//             moreStyle="w-[50%] md:w-[90%] lg:w-[50%] items-center mt-10"
//             disabled={!isFormChanged}
//           >
//             Salveaza
//           </Button>
//         </form>
//       </div>
//       <div className="pb-10 mb-9 md:mb-0 flex flex-col w-full py-5 px-2 md:mx-2 text-center border rounded">
//         <Title>
//           SCHIMBA PAROLA
//           <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
//             Editeaza parola asociata contului tau
//           </span>
//         </Title>
//         <form
//           className="flex flex-col items-center text-start w-full"
//           action={secondFormAction}
//         >
//           <input type="hidden" name="id" value={user?.id} />
//           <Input name="currentPassword" label="Parola veche" type="password" />
//           <div className="flex md:flex-col lg:flex-row w-full">
//             <Input name="newPassword" label="Parola noua" type="password" />
//             <Input
//               name="confirmNewPassword"
//               label="Confirma parola noua"
//               type="password"
//             />
//           </div>
//           <Button
//             moreStyle="w-[50%] lg:w-[50%] md:w-[90%] mx-auto md:mt-[128px] mt-10"
//             disabled={!isFormChanged}
//           >
//             Schimba parola
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/util/button";
import Input from "@/components/util/input";
import Title from "@/components/util/title";
import { updatePassword, updateUser } from "@/actions/user-actions";
import "@/app/globals.css";

const showToast = (type, message) => {
  const config = {
    className: `toast-${type}-message`,
    position: "bottom-right",
    theme: "colored",
  };
  type === "success"
    ? toast.success(message, config)
    : toast.error(message, config);
};

const useUserData = (setUser, setInitialUserData) => {
  const fetchUserData = async () => {
    const response = await fetch("/api/valid");
    const data = await response.json();
    if (data.user) {
      const userResponse = await fetch(`/api/user/${data.user.id}`);
      const userData = await userResponse.json();
      setUser(userData);
      setInitialUserData(userData);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return fetchUserData;
};

const PersonalDataPage = () => {
  const [user, setUser] = useState(null);
  const [initialUserData, setInitialUserData] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [formState, formAction] = useFormState(updateUser, {});
  const [secondFormState, secondFormAction] = useFormState(
    updatePassword.bind(null, user?.email),
    {}
  );

  useUserData(setUser, setInitialUserData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    if (initialUserData && value !== initialUserData[name]) {
      setIsFormChanged(true);
    } else if (
      initialUserData &&
      value === initialUserData[name] &&
      !Object.keys(user).some((key) => user[key] !== initialUserData[key])
    ) {
      setIsFormChanged(false);
    }
  };

  useEffect(() => {
    showToast(formState.success ? "success" : "error", formState.message);
    if (formState.success) {
      setTimeout(() => {
        window.location.reload();
      }, 8000);
    }
  }, [formState]);

  useEffect(() => {
    console.log(secondFormState);
    showToast(
      secondFormState.success ? "success" : "error",
      secondFormState.message
    );
  }, [secondFormState]);

  return (
    <div className="flex flex-col md:flex-row p-5 w-full mt-5 mb-10">
      <ToastContainer />
      <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 md:mx-2 text-center border rounded">
        <Title>
          DATE PERSONALE
          <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
            Editeaza datele personale asociate contului tau
          </span>
        </Title>
        <form
          className="flex flex-col items-center text-start"
          action={formAction}
        >
          <input type="hidden" name="id" value={user?.id} />
          <div className="flex md:flex-col lg:flex-row w-full">
            <Input
              name="firstName"
              label="Prenume"
              defaultValue={user?.first_name}
              onChange={handleInputChange}
            />
            <Input
              name="secondName"
              label="Nume"
              defaultValue={user?.second_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex-row md:flex-col lg:flex-row lg:flex w-full">
            <Input
              name="email"
              label="Email"
              defaultValue={user?.email}
              onChange={handleInputChange}
            />
            <Input
              name="phone"
              label="Telefon"
              defaultValue={user?.phone}
              onChange={handleInputChange}
            />
          </div>
          <Button
            moreStyle="w-[50%] md:w-[90%] lg:w-[50%] items-center mt-10"
            disabled={!isFormChanged}
          >
            Salveaza
          </Button>
        </form>
      </div>
      <div className="pb-10 mb-9 md:mb-0 flex flex-col w-full py-5 px-2 md:mx-2 text-center border rounded">
        <Title>
          SCHIMBA PAROLA
          <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
            Editeaza parola asociata contului tau
          </span>
        </Title>
        <form
          className="flex flex-col items-center text-start w-full"
          action={secondFormAction}
        >
          <input type="hidden" name="id" value={user?.id} />
          <div className="flex md:flex-col  lg:flex-row w-full">
            <Input
              name="currentPassword"
              label="Parola veche"
              type="password"
            />
            <div className="flex md:flex-row  w-full">
              <Input name="newPassword" label="Parola noua" />
              <Input name="confirmNewPassword" label="Confirma parola noua" />
            </div>
          </div>
          <Button moreStyle="w-[50%] lg:w-[50%] md:w-[90%] mx-auto md:mt-[128px] mt-10">
            Schimba parola
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDataPage;

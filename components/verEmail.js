// export const VerEmailTemp = ({ email, emailVerificationToken }) => (
//   <div
//     style={{
//       fontFamily: "Arial, sans-serif",
//       textAlign: "center",
//       color: "black",
//       marginBottom: "20px",
//     }}
//   >
//     <img
//       src="https://res.cloudinary.com/defo6qykq/image/upload/v1724240773/floraria_hellen/icon_oswlrr_c_crop_ar_16_9_eiqkia.png" // Replace with your actual logo URL
//       alt="Floraria Hellen Logo"
//       style={{ maxWidth: "200px" }}
//     />

//     <h2>Buna, {email}!</h2>
//     <p>Apasa butonul pentru a-ti confirma adresa de email: </p>
//     <a
//       href={`http://localhost:3000/authentification/verify-email?token=${emailVerificationToken}`}
//       style={{
//         display: "inline-block",
//         padding: "10px 20px",
//         backgroundColor: "rgb(116, 10, 10)",
//         color: "#fff",
//         textDecoration: "none",
//         borderRadius: "5px",
//       }}
//     >
//       Confirmare email{" "}
//     </a>
//   </div>
// );
// components/verEmail.js
export const VerEmailTemp = ({ email, emailVerificationToken }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      color: "black",
      marginBottom: "20px",
    }}
  >
    <img
      src="https://res.cloudinary.com/defo6qykq/image/upload/v1724240773/floraria_hellen/icon_oswlrr_c_crop_ar_16_9_eiqkia.png" // Replace with your actual logo URL
      alt="Floraria Hellen Logo"
      style={{ maxWidth: "150px" }}
    />
    <div style={{ textAlign: "start", color: "black" }}>
      <h3 style={{ fontSize: "17px", marginBottom: "10px" }}>Buna, {email}!</h3>
      <h3 style={{ color: "black", marginTop: 0 }}>
        Ai primit acest email pentru ca ai solicititat crearea unui nou cont.
      </h3>
      <p style={{ color: "#606060", fontSize: "15px" }}>
        Apasa butonul de mai jos pentru a confirma adresa de email si a crea
        contul. Daca nu esti tu cel care a solicitat acest lucru, poti sterge
        linistit email-ul.
      </p>
      <a
        href={`http://localhost:3000/authentification/reset-password?token=${emailVerificationToken}`}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "rgb(116, 10, 10)",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Confirmare email
      </a>
    </div>
  </div>
);

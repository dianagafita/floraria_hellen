// import React from "react";

const NikeReceiptEmail = ({ firstName, order }) => {
  console.log(order);
  return (
    <html>
      <body>
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
          <h1 style={{ color: "#333" }}>Comanda plasată cu succes</h1>
          <p>Salut {firstName},</p>
          <p>Vă mulțumim pentru comanda dvs. Aici sunt detaliile comenzii:</p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Produs
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Cantitate
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Preț
                </th>
              </tr>
            </thead>
            <tbody>
              {order.order_items.map((item) => (
                <tr key={item.id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {item.product.name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {item.quantity}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {item.product.price} RON
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: {order.total} RON</p>
          <p>Vă mulțumim pentru cumpărături!</p>
        </div>
      </body>
    </html>
  );
};

export default NikeReceiptEmail;

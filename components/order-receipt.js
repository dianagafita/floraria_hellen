const NikeReceiptEmail = ({ firstName, order }) => {
  const subTotal = 100; // Example value, replace with actual calculation
  const deliveryCost = 10; // Example value, replace with actual calculation
  const total = subTotal + deliveryCost;

  const formatDate = (createdAt) => {
    // Create a new Date object from the created_at string
    const date = new Date(createdAt);

    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as YYYY-MM-DD
    return `${day}.${month}.${year}`;
  };
  const formattedDate = formatDate(order.created_at);

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          overflowX: "auto",
          fontFamily: "Arial, sans-serif",
          // padding: "20px 2px",
          margin: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            // padding: "20px 2px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            width: "100%",
            margin: "0 auto", // Centering the container
          }}
        >
          <h1
            style={{ fontSize: "24px", fontWeight: "bold", color: "#333333" }}
          >
            Comanda plasată si platita cu succes.
          </h1>
          <p>Buna {firstName},</p>
          <p>Vă mulțumim pentru comanda dvs. Aici sunt detaliile comenzii:</p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "17px",
              color: "rgba(86, 12, 6, 0.9)",
            }}
          >
            [Comanda nr.{order.id}] ({formattedDate})
          </p>
          <table
            style={{
              color: "#333333",
              width: "100%",
              borderCollapse: "collapse",
              borderSpacing: "0",
              boxSizing: "border-box",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  Produs
                </th>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  Detalii
                </th>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  Cantitate
                </th>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  Preț
                </th>
              </tr>
            </thead>
            <tbody>
              {order.order_items.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{
                      border: "1px solid #D0D0D0",
                      padding: "10px 8px",
                      fontSize: "11px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <img
                        src={item.product.images_url[0]}
                        style={{
                          height: "6rem",
                          width: "4rem",
                          margin: "5px",
                          verticalAlign: "middle",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <p style={{ marginLeft: "5px", display: "inline" }}>
                        {item.product.name}
                      </p>
                    </div>
                  </td>

                  <td
                    style={{
                      border: "1px solid #D0D0D0",
                      padding: "10px 8px",
                      fontSize: "11px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.productDeliveryInfo.map((it, index) => (
                      <p key={index}>
                        {it === "true"
                          ? "ANONIM"
                          : it === "false"
                          ? "Anonin: NU"
                          : it}
                      </p>
                    ))}
                  </td>
                  <td
                    style={{
                      border: "1px solid #D0D0D0",
                      padding: "10px 8px",
                      fontSize: "11px",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    style={{
                      border: "1px solid #D0D0D0",
                      padding: "10px 8px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    {item.product.price} RON
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="1"
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: "8px",
                    fontWeight: "bold",
                    textAlign: "left",
                    backgroundColor: "#f0f0f0",
                    borderTop: "2px solid #D0D0D0",
                  }}
                >
                  Sub-total:
                </td>
                <td
                  colSpan="3"
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: "8px",
                    textAlign: "center",
                    fontSize: "11px",
                  }}
                >
                  {subTotal} LEI
                </td>
              </tr>
              <tr>
                <td
                  colSpan="1"
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: "8px",
                    fontWeight: "bold",
                    textAlign: "left",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  Livrare:
                </td>
                <td
                  colSpan="3"
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: "8px",
                    fontSize: "11px",
                    textAlign: "center",
                  }}
                >
                  {deliveryCost} LEI
                </td>
              </tr>
              <tr>
                <td
                  colSpan="1"
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: "8px",
                    fontWeight: "bold",
                    backgroundColor: "#f0f0f0",
                    textAlign: "left",
                  }}
                >
                  Total:
                </td>
                <td
                  colSpan="3"
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: "8px",
                    fontSize: "11px",
                    textAlign: "center",
                  }}
                >
                  {order.totalPrice} LEI
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <span>Adresa de livrare</span>
          </div>
          <p>Vă mulțumim pentru cumpărături!</p>
        </div>
      </body>
    </html>
  );
};

export default NikeReceiptEmail;

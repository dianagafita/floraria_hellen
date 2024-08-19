// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
// function generateUniqueId() {
//   const timestamp = Date.now(); // Current timestamp
//   const random = Math.floor(Math.random() * 1000); // Random number between 0 and 999
//   return `${timestamp}-${random}`;
// }
// const resend = new Resend(process.env.RESEND_API_KEY);

// async function generatePDF(formData) {
//   const pdfDoc = await PDFDocument.create();
//   const A4_WIDTH = 595.276;
//   const A4_HEIGHT = 841.89;

//   // Add a page with A4 dimensions
//   const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);

//   // Embed the standard font
//   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

//   // Calculate x position to center text
//   const uniqueId = generateUniqueId();
//   const titleText = `CERERE OFERTA #${uniqueId}`;
//   const fontSize = 25;

//   let width;
//   try {
//     width = font.widthOfTextAtSize(titleText, fontSize);
//   } catch (error) {
//     console.error("Error calculating text width:", error);
//     throw new Error("Text width calculation failed.");
//   }

//   if (isNaN(width)) {
//     throw new Error("Calculated text width is NaN.");
//   }

//   const pageWidth = page.getWidth();
//   const xPosition = (pageWidth - width) / 2;

//   // Draw centered text
//   try {
//     page.drawText(titleText, {
//       x: xPosition,
//       y: A4_HEIGHT - 80, // Y position
//       size: fontSize,
//       color: rgb(0, 0, 0),
//       font: font,
//       lineHeight: fontSize * 1.2, // Line height for multi-line text
//     });
//   } catch (error) {
//     console.error("Error drawing text:", error);
//     throw new Error("Text drawing failed.");
//   }
//   page.drawText(`Nume Complet: ${formData.requestOfferFullName}`, {
//     x: 50,
//     y: A4_HEIGHT - 140,
//     font: font,
//   });
//   page.drawText(`Telefon: ${formData.requestOfferPhone}`, {
//     x: 50,
//     y: A4_HEIGHT - 180,
//     font: font,
//   });
//   page.drawText(`Email: ${formData.requestOfferEmail}`, {
//     x: 50,
//     y: A4_HEIGHT - 220,
//     font: font,
//   });
//   page.drawText(`Data Evenimentului: ${formData.requestOfferDate}`, {
//     x: 50,
//     y: A4_HEIGHT - 260,
//     font: font,
//   });
//   page.drawText(`Tip Eveniment: ${formData.requestOfferEvent}`, {
//     x: 50,
//     y: A4_HEIGHT - 320,
//     font: font,
//   });
//   page.drawText(`Buget Maxim: ${formData.requestOfferNrInvitati}`, {
//     x: 50,
//     y: A4_HEIGHT - 360,
//     font: font,
//   });
//   page.drawText(`Numar Invitati: ${formData.requestOfferNrInvitati}`, {
//     x: 50,
//     y: A4_HEIGHT - 420,
//     font: font,
//   });
//   page.drawText(`Numar Mese: ${formData.requestOfferNrMese}`, {
//     x: 50,
//     y: A4_HEIGHT - 460,
//     font: font,
//   });
//   page.drawText(`Detalii: ${formData.requestOfferDetails}`, {
//     x: 50,
//     y: A4_HEIGHT - 520,
//     font: font,
//   });
//   page.drawText(`Produse Interesate: ${formData.requestOfferProductID}`, {
//     x: 50,
//     y: A4_HEIGHT - 560,
//     font: font,
//   });

//   const pdfBytes = await pdfDoc.save();
//   return pdfBytes;
//}
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { NextResponse } from "next/server";
import { Resend } from "resend";

function generateUniqueId() {
  const timestamp = Date.now(); // Current timestamp
  const random = Math.floor(Math.random() * 1000); // Random number between 0 and 999
  return `${timestamp}-${random}`;
}
const resend = new Resend(process.env.RESEND_API_KEY);

async function generatePDF(formData) {
  const pdfDoc = await PDFDocument.create();

  // Define A4 size dimensions in points
  const A4_WIDTH = 595.276;
  const A4_HEIGHT = 841.89;

  // Add a page with A4 dimensions
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);

  // Embed the standard font
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const fontSize = 12; // Font size for the body text
  const titleFontSize = 18; // Font size for the title text
  const margin = 50; // Margin from edges of the page
  const rowHeight = 30; // Height of each row including padding
  const headerYPosition = A4_HEIGHT - margin - titleFontSize - 20; // Starting Y position for the header

  // Generate unique ID and format the date
  const uniqueId = generateUniqueId();
  const titleText = `CERERE OFERTA #${uniqueId}`;
  const currentDate = new Date().toLocaleDateString();

  // Draw title centered at the top
  const titleWidth = font.widthOfTextAtSize(titleText, titleFontSize);
  const titleX = (A4_WIDTH - titleWidth) / 2;
  page.drawText(titleText, {
    x: titleX,
    y: A4_HEIGHT - margin,
    size: titleFontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  // Draw header information
  page.drawText(`DATA CERERE OFERTE: ${currentDate}`, {
    x: margin,
    y: headerYPosition,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  page.drawText(`DATE CLIENT`, {
    x: margin,
    y: headerYPosition - rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  page.drawText(`NUME COMPLET: ${formData.requestOfferFullName}`, {
    x: margin,
    y: headerYPosition - 2 * rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  page.drawText(`TELEFON: ${formData.requestOfferPhone}`, {
    x: margin,
    y: headerYPosition - 3 * rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  page.drawText(`EMAIL: ${formData.requestOfferEmail}`, {
    x: margin,
    y: headerYPosition - 4 * rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  // Draw event data in the right section
  const rightColumnX = A4_WIDTH / 2 + margin / 2;
  page.drawText(`DATA EVENIMENT:`, {
    x: rightColumnX,
    y: headerYPosition - 3 * rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  page.drawText(`${formData.requestOfferDate}`, {
    x: rightColumnX,
    y: headerYPosition - 4 * rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  // Define table dimensions
  const tableStartY = headerYPosition - 6 * rowHeight - 20; // Starting Y position for the table
  const tableWidth = A4_WIDTH - 2 * margin;
  const columnWidth = tableWidth / 4;

  // Function to draw a cell with text
  const drawCell = (x, y, width, height, text) => {
    page.drawRectangle({
      x: x,
      y: y,
      width: width,
      height: height,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
    });
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    const textX = x + (width - textWidth) / 2;
    const textY = y + (height - fontSize) / 2;
    page.drawText(text, {
      x: textX,
      y: textY,
      size: fontSize,
      color: rgb(0, 0, 0),
      font: font,
    });
  };
  drawCell(margin, tableStartY, columnWidth, rowHeight, "TIP");
  drawCell(
    margin + columnWidth,
    tableStartY,
    columnWidth,
    rowHeight,
    "BUGET MAX."
  );
  drawCell(
    margin + 2 * columnWidth,
    tableStartY,
    columnWidth,
    rowHeight,
    "NR.INVITATI"
  );
  drawCell(
    margin + 3 * columnWidth,
    tableStartY,
    columnWidth,
    rowHeight,
    "NR.MESE"
  );

  // Draw table row for data
  drawCell(
    margin,
    tableStartY - rowHeight,
    columnWidth,
    rowHeight,
    formData.requestOfferEvent
  );
  drawCell(
    margin + columnWidth,
    tableStartY - rowHeight,
    columnWidth,
    rowHeight,
    formData.requestOfferNrInvitati
  );
  drawCell(
    margin + 2 * columnWidth,
    tableStartY - rowHeight,
    columnWidth,
    rowHeight,
    formData.requestOfferNrMese
  );

  // Draw table border and lines
  page.drawRectangle({
    x: margin,
    y: tableStartY - rowHeight,
    width: tableWidth,
    height: rowHeight,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
  });

  page.drawLine({
    start: { x: margin, y: tableStartY },
    end: { x: A4_WIDTH - margin, y: tableStartY },
    color: rgb(0, 0, 0),
    thickness: 1,
  });
  page.drawLine({
    start: { x: margin, y: tableStartY - rowHeight },
    end: { x: A4_WIDTH - margin, y: tableStartY - rowHeight },
    color: rgb(0, 0, 0),
    thickness: 1,
  });

  // Add PRODUSE title
  const produzeTitle = "PRODUSE";
  const produzeTitleWidth = font.widthOfTextAtSize(produzeTitle, titleFontSize);
  const produzeTitleX = (A4_WIDTH - produzeTitleWidth) / 2;
  const produzeTitleY = tableStartY - 2 * rowHeight - 40; // Adjust the Y position for PRODUSE title

  page.drawText(produzeTitle, {
    x: produzeTitleX,
    y: produzeTitleY,
    size: titleFontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  // Define dimensions for products table
  const productTableStartY = produzeTitleY - 2 * rowHeight - 20; // Y position for the product table
  const productTableWidth = A4_WIDTH - 2 * margin;
  const productColumnWidth = productTableWidth / 2;

  // Draw products table headers
  drawCell(margin, productTableStartY, productColumnWidth, rowHeight, "NUME");
  drawCell(
    margin + productColumnWidth,
    productTableStartY,
    productColumnWidth,
    rowHeight,
    "ID"
  );

  // Draw products table row for data
  drawCell(
    margin,
    productTableStartY - rowHeight,
    productColumnWidth,
    rowHeight,
    formData.requestOfferProductID
  );
  drawCell(
    margin + productColumnWidth,
    productTableStartY - rowHeight,
    productColumnWidth,
    rowHeight,
    "" // Product ID or data can be added here
  );

  // Draw products table border and lines
  page.drawRectangle({
    x: margin,
    y: productTableStartY - rowHeight,
    width: productTableWidth,
    height: rowHeight,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
  });

  page.drawLine({
    start: { x: margin, y: productTableStartY },
    end: { x: A4_WIDTH - margin, y: productTableStartY },
    color: rgb(0, 0, 0),
    thickness: 1,
  });
  page.drawLine({
    start: { x: margin, y: productTableStartY - rowHeight },
    end: { x: A4_WIDTH - margin, y: productTableStartY - rowHeight },
    color: rgb(0, 0, 0),
    thickness: 1,
  });

  // Add DETALII title
  const detaliiTitle = "DETALII";
  const detaliiTitleWidth = font.widthOfTextAtSize(detaliiTitle, titleFontSize);
  const detaliiTitleX = margin;
  const detaliiTitleY = productTableStartY - 2 * rowHeight - 20; // Adjust the Y position for DETALII title

  page.drawText(detaliiTitle, {
    x: detaliiTitleX,
    y: detaliiTitleY,
    size: titleFontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  // Draw DETALII details
  const detailsYPosition = detaliiTitleY - rowHeight - 10; // Starting Y position for details

  page.drawText(formData.requestOfferDetails, {
    x: margin,
    y: detailsYPosition - rowHeight,
    size: fontSize,
    color: rgb(0, 0, 0),
    font: font,
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

export async function POST(req) {
  console.log("POST request received");

  try {
    const formData = await req.json(); // Parse the request body
    console.log("Received form data:", formData);

    // Generate PDF
    const pdfBytes = await generatePDF(formData);

    // Send the email using Resend
    const emailResponse = await resend.emails.send({
      from: "Floraria Hellen <onboarding@resend.dev>",
      to: ["gafita.diana12@gmail.com"],
      subject: "Oferta Dvs.",
      text: "buna",
      attachments: [
        {
          content: Buffer.from(pdfBytes).toString("base64"),
          filename: "oferta.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    });

    console.log("Email response:", emailResponse);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to send email or generate PDF.", error },
      { status: 500 }
    );
  }
}

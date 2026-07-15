import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      phone,
      destination,
      from,
      to,
      message,
    } = await req.json();

    // ✅ Validation
    if (!name || !phone || !destination) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, phone and destination are required",
        },
        { status: 400 }
      );
    }

    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, //malhotratourandtravels2@gmail.com
        pass: process.env.EMAIL_PASS, // tzvgewihvsrmmpxo
      },
    });

    // ✅ Send Mail (updated branding + email included)
    await transporter.sendMail({
      from: `"Malhotra's Tour & Travel" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, //malhotratourandtravels2@gmail.com
      subject: `🌍 New Travel Booking Request — ${destination}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<style>
  body{
    margin:0;
    padding:0;
    background:#f4f5f7;
    font-family:Arial,sans-serif;
    color:#111827;
  }

  table{
    border-spacing:0;
  }

  .wrapper{
    width:100%;
    background:#f4f5f7;
    padding:40px 16px;
  }

  .container{
    width:100%;
    max-width:680px;
    background:#ffffff;
    border-radius:28px;
    overflow:hidden;
    margin:auto;
    box-shadow:0 10px 40px rgba(0,0,0,0.08);
  }

  .header{
    background:linear-gradient(135deg,#ff9f1c,#ff6b00);
    padding:50px 40px;
    color:#ffffff;
  }

  .header h1{
    margin:0;
    font-size:38px;
    line-height:1.2;
    font-weight:700;
  }

  .header p{
    margin:12px 0 0;
    font-size:16px;
    opacity:0.92;
  }

  .body{
    padding:40px;
  }

  .section-title{
    margin:0 0 28px;
    font-size:28px;
    line-height:1.3;
    color:#111827;
  }

  .grid{
    width:100%;
  }

  .card{
    background:#faf7f2;
    border:1px solid #f1e6d8;
    border-radius:20px;
    padding:22px;
    width:100%;
    box-sizing:border-box;
  }

  .card-gray{
    background:#f9fafb;
    border:1px solid #e5e7eb;
    border-radius:20px;
    padding:22px;
    width:100%;
    box-sizing:border-box;
  }

  .destination{
    margin-top:22px;
    background:#fff8ef;
    border:1px solid #ffe0b5;
    border-radius:22px;
    padding:26px;
  }

  .label{
    margin:0;
    font-size:12px;
    text-transform:uppercase;
    letter-spacing:1.2px;
    color:#6b7280;
    font-weight:700;
  }

  .value{
    margin:10px 0 0;
    font-size:24px;
    line-height:1.4;
    color:#111827;
    word-break:break-word;
  }

  .destination-value{
    margin:12px 0 0;
    font-size:32px;
    line-height:1.3;
    color:#111827;
    word-break:break-word;
  }

  .message{
    margin-top:24px;
  }

  .message-text{
    margin:12px 0 0;
    font-size:15px;
    line-height:1.9;
    color:#374151;
    word-break:break-word;
    white-space:pre-wrap;
  }

  .footer{
    background:#111827;
    padding:30px 24px;
    text-align:center;
    color:#d1d5db;
  }

  .footer-title{
    margin:0 0 8px;
    font-size:16px;
    color:#ffffff;
    font-weight:600;
  }

  .footer-text{
    margin:0;
    font-size:13px;
    line-height:1.7;
  }

  .space{
    height:20px;
  }

  @media only screen and (max-width: 640px){

    .wrapper{
      padding:20px 10px;
    }

    .header{
      padding:36px 24px;
    }

    .header h1{
      font-size:28px !important;
    }

    .header p{
      font-size:14px !important;
    }

    .body{
      padding:24px !important;
    }

    .section-title{
      font-size:24px !important;
    }

    .value{
      font-size:20px !important;
    }

    .destination-value{
      font-size:26px !important;
    }

    .mobile-block{
      display:block !important;
      width:100% !important;
      padding:0 !important;
    }

    .mobile-gap{
      height:16px !important;
      display:block !important;
    }
  }
</style>
</head>

<body>

<div class="wrapper">

  <table width="100%" role="presentation">
    <tr>
      <td align="center">

        <table class="container" role="presentation">

          <!-- HEADER -->
          <tr>
            <td class="header">
              <h1>Malhotra's Tour & Travel</h1>

              <p>
                A new travel booking inquiry has been received.
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td class="body">

              <h2 class="section-title">
                Booking Details
              </h2>

              <!-- NAME + PHONE -->
              <table width="100%" class="grid" role="presentation">
                <tr>

                  <td
                    width="50%"
                    class="mobile-block"
                    valign="top"
                    style="padding-right:10px;"
                  >
                    <div class="card">
                      <p class="label">
                        Traveler Name
                      </p>

                      <h3 class="value">
                        ${name}
                      </h3>
                    </div>
                  </td>

                  <td class="mobile-gap" style="width:0;"></td>

                  <td
                    width="50%"
                    class="mobile-block"
                    valign="top"
                    style="padding-left:10px;"
                  >
                    <div class="card">
                      <p class="label">
                        Phone Number
                      </p>

                      <h3 class="value">
                        ${phone}
                      </h3>
                    </div>
                  </td>

                </tr>
              </table>

              <!-- DESTINATION -->
              <div class="destination">

                <p class="label" style="color:#92400e;">
                  Destination
                </p>

                <h2 class="destination-value">
                  ${destination}
                </h2>

              </div>

              <!-- DATES -->
              <table
                width="100%"
                class="grid"
                role="presentation"
                style="margin-top:22px;"
              >
                <tr>

                  <td
                    width="50%"
                    class="mobile-block"
                    valign="top"
                    style="padding-right:10px;"
                  >
                    <div class="card-gray">

                      <p class="label">
                        Travel From
                      </p>

                      <h3 class="value">
                        ${from || "Not selected"}
                      </h3>

                    </div>
                  </td>

                  <td class="mobile-gap" style="width:0;"></td>

                  <td
                    width="50%"
                    class="mobile-block"
                    valign="top"
                    style="padding-left:10px;"
                  >
                    <div class="card-gray">

                      <p class="label">
                        Travel To
                      </p>

                      <h3 class="value">
                        ${to || "Not selected"}
                      </h3>

                    </div>
                  </td>

                </tr>
              </table>

              ${message
          ? `
              <!-- MESSAGE -->
              <div class="message card-gray">

                <p class="label">
                  Customer Message
                </p>

                <p class="message-text">
                  ${message}
                </p>

              </div>
              `
          : ""
        }

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="footer">

              <p class="footer-title">
                Malhotra's Tour & Travel
              </p>

              <p class="footer-text">
                Crafted journeys that become lifelong memories ✨
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</div>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Email failed",
      },
      { status: 500 }
    );
  }
}
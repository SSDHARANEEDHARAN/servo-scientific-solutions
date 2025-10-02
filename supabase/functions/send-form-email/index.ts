import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const SMTP_HOST = Deno.env.get("SMTP_HOST") || "smtp.resend.com";
const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "587");
const SMTP_USER = Deno.env.get("SMTP_USER") || "resend";
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") || "re_XN8ML2wR_7J5D6ygiEvEbaYW2oecj9acJ";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  formType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  company?: string;
  productCategory?: string;
  machine?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  comments?: string;
  subject?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormSubmission = await req.json();

    console.log("Received form submission:", formData);

    // Create email content based on form type
    let emailSubject = "";
    let emailContent = "";

    switch (formData.formType) {
      case "inquiry":
        emailSubject = `Product Inquiry - ${formData.productCategory || 'General'}`;
        emailContent = `
          <h2>New Product Inquiry</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Product Category:</strong> ${formData.productCategory || 'Not specified'}</p>
          <p><strong>Machine:</strong> ${formData.machine || 'Not specified'}</p>
          <p><strong>Address:</strong> ${formData.address || 'Not provided'}</p>
          <p><strong>City:</strong> ${formData.city || 'Not provided'}</p>
          <p><strong>State:</strong> ${formData.state || 'Not provided'}</p>
          <p><strong>Pincode:</strong> ${formData.pincode || 'Not provided'}</p>
          <p><strong>Comments:</strong> ${formData.comments || 'No additional comments'}</p>
        `;
        break;
      
      case "contact":
        emailSubject = `Contact Form - ${formData.subject || 'General Inquiry'}`;
        emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong> ${formData.message || 'No message provided'}</p>
        `;
        break;
      
      case "service":
        emailSubject = `Service Request - ${formData.name}`;
        emailContent = `
          <h2>New Service Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Message:</strong> ${formData.message || 'No message provided'}</p>
        `;
        break;
      
      default:
        emailSubject = `Form Submission - ${formData.name}`;
        emailContent = `
          <h2>New Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong> ${formData.message || 'No message provided'}</p>
        `;
    }

    // Send email using SMTP
    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOST,
        port: SMTP_PORT,
        tls: true,
        auth: {
          username: SMTP_USER,
          password: SMTP_PASSWORD,
        },
      },
    });

    await client.send({
      from: "Servo Scientific <onboarding@resend.dev>",
      to: "tharaneetharanss@gmail.com", // Change this to servoscientific@yahoo.com after verifying domain
      subject: emailSubject,
      content: emailContent,
      html: emailContent,
    });

    await client.close();

    console.log("Email sent successfully via SMTP");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
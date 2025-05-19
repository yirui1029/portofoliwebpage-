// app/api/send-email/route.js
import sgMail from "@sendgrid/mail";

export async function POST(req) {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    const patternemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!patternemail.test(email)) {
        return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    const cleanedMessage = message
        .replace(/\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\t/g, "<br>")
        .replace(/<(?!br\s*\/?)[^>]+>/g, "");

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);


    const sendGridMail = {
        to: "yirui.hao@gmail.com",
        from: "yirui.hao@gmail.com",
        templateId: "d-c7c719a1e7be4508a8acf94e2c2433d9",
        dynamic_template_data: {
            nom: name,
            mail: email,
            contenu: cleanedMessage,
        },
    };

    try {
        await sgMail.send(sendGridMail);
        return new Response(JSON.stringify({ message: "EMAIL_SENDED_SUCCESSFULLY" }), { status: 200 });
    } catch (error) {
        console.error("SendGrid error:", error);
        return new Response(JSON.stringify({ message: "ERROR_WITH_SENDGRID" }), { status: 500 });
    }
}

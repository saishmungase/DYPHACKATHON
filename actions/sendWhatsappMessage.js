export default async function sendWhatsAppMessagesss(aqi) {
    const to = "+917517481001"; // Replace with dynamic numbers if needed
    const name = "Atharv";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App 8686c43d3ecb2c09acf4a2e63991157a-efcecbe1-ccec-434b-89bf-56ad397e4f99");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    const raw = JSON.stringify({
        "messages": [
            {
                "from": "447860099299",
                "to": to,
                "messageId": "3b210837-5305-4f1e-bba6-e1f6d4aa42b9",
                "content": {
                    "templateName": "test_whatsapp_template_en",
                    "templateData": {
                        "body": {
                            "placeholders": [`AQI Alert: ${aqi}`]
                        }
                    },
                    "language": "en"
                }
            }
        ]
    });

    try {
        const response = await fetch("https://kqvmn1.api.infobip.com/whatsapp/1/message/template", {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        });

        const result = await response.text();
        console.log(`Message Sent: ${result}`);
    } catch (error) {
        console.error(`Error sending WhatsApp message: ${error.message}`);
    }
}

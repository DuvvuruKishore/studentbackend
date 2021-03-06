import dotenv from 'dotenv';
dotenv.config();
import mailer from 'nodemailer';


const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "Appliedforuniversity":
            data = {
                from: "John Ahn <duvvurukishore100@gmail.com>",
                to,
                subject: `Applied for ${name}`,
    
            }
            break;

        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })

}
export default sendEmail;

const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'portfoliomd10@gmail.com',
            pass: 'j i a u r v v c q f c h y c l i'
        }
    });

    const mailOptions = {
        from: 'portfoliomd10@gmail.com',
        to: 'mdsumang.091@gmail.com',
        subject: req.body.subject,
        text: `From ${req.body.name} at ${req.body.email}: `+ req.body.message,

    }

    transporter.sendMail(mailOptions, (error,info)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            console.log(info.response);
            res.send('success');
        }
    })
});


app.listen(PORT, ()=>{
    console.log(`Listening in Port: ${PORT}`);
});
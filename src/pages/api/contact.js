
import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      await resend.emails.send({
        from: 'contact@jennibaum.com',
        to: 'jenniferdsbaumgart@gmail.com',
        reply_to: email,
        subject: `Mensagem de ${name} - ${subject}`,
        html: `
          <h1>Mensagem de Contato</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar mensagem', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import * as Mailjet from 'node-mailjet';

const apiKey = '131483d785e1c4351316ebb3b97f54d1';
const apiSecret = 'b683408ba1c6d58b458dbf709b257c62';
const contactListId = '10262540';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Lógica para agregar el contacto a la lista de Mailjet
    const client = new Mailjet.Client({
      apiKey,
      apiSecret
    });

    const request = client.post('contact', { 'version': 'v3' }).request({
      "IsExcludedFromCampaigns": "false",
      "Name": "New Contact",
      "Email": email
    });

    request
      .then((result) => {
        const contact = result.body;
        res.status(200).json({ message: 'Contacto agregado correctamente', contact });
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error al agregar el contacto', error });
      });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}

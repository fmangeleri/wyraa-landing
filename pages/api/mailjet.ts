import mailjet from 'node-mailjet';

const apiKey = '131483d785e1c4351316ebb3b97f54d1';
const apiSecret = 'b683408ba1c6d58b458dbf709b257c62';

// Función para crear un nuevo contacto en Mailjet
export async function createContact(email: string, name: string) {
  const client = mailjet.connect(apiKey, apiSecret);
  const request = client.post('contact').request({
    Email: email,
    Name: name,
  });

  const result = await request;
  const contact = result.body.Data[0];
  return contact;
}

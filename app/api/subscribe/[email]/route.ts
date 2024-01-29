import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import * as Mailjet from 'node-mailjet';

const apiKey = '131483d785e1c4351316ebb3b97f54d1';
const apiSecret = 'b683408ba1c6d58b458dbf709b257c62';
const contactListId = '10262540';

export async function POST(request: Request, { params }: { params: { email: string } }) {
  try {
    // Lógica para agregar el contacto a la lista de Mailjet
    const client = new Mailjet.Client({
      apiKey,
      apiSecret
    });

    const subscribeReq = await client.post('contact', { 'version': 'v3' }).request({
      "IsExcludedFromCampaigns": "false",
      "Name": "New Contact",
      "Email": params.email
    });

    if(subscribeReq) {
      const contact = subscribeReq.body

      // Agrega un log del objeto contact
      console.log('Contacto:', contact);
      
      return NextResponse.json({ message: 'Contacto agregado correctamente', contact })
    } else {
      return NextResponse.json({ message: 'Error al agregar el contacto'})
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error al agregar el contacto', error })
    
  }
}

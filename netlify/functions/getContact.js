import { neon } from '@neondatabase/serverless';

export async function handler(event) {
  const sql = neon(process.env.DATABASE_URL);

  const phone = event.queryStringParameters.phone;

  const result = await sql`
    SELECT first_name, last_name
    FROM contacts
    WHERE phone_number = ${phone}
  `;

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }; m 
}
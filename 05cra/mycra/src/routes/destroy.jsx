import { redirect } from 'react-router-dom';
import { deleteContact } from '../routerex/contacts.js';

export async function action({ params }) {
  await deleteContact( params.contactId );
  return redirect("/");
}


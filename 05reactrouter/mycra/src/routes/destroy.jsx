import { redirect } from 'react-router-dom';
import { deleteContact } from '../routerex/contacts.js';

export async function action({ params }) {
  // throw new Error("oh dang!");  // Used to test contextual error message (errorElement).
  await deleteContact( params.contactId );  // Deliberate error to test contextual error messages.
  return redirect("/");
}


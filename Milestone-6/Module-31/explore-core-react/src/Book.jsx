export default function Book({ book }) {
  console.log('Book: ',book);

  return <li>Name:{book.name} Price:{book.price}</li>;
}

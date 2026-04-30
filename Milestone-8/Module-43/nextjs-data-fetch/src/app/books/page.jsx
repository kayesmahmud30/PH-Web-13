import BookCard from "@/components/BookCard";

/*

* cache: "no-store" --> It will fetch the data on every request ,And it will not cache the data. --> SSR

* cache: "force-cache" --> It will cache the data on the first request and it will serve the cached data on subsequent requests. --> SSG

* next: {revalidate: 20} --> It will cache the data for 20 seconds and after 20 seconds it will fetch the data again and update the cache. --> ISR

*/

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", { next: { revalidate: 9 } });
  const books = await res.json();

  return (
    <div>
      <h2>Books: {books.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;

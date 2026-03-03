export default function Book({book}) {
    console.log(book);
    const { name, price } = book;
    return (
        <div>
            <h1>Book Name: {name} </h1>
            <p>Book Price: {price} </p>
        </div>
    )
}
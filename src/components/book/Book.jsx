export default function Book({book}) {
    console.log("inside book component:",book);
    const { id, price } = book;
    return (
        <div>
            <h1>Book id: {id} </h1>
            <p>Book Price: {price} </p>
        </div>
    )
}
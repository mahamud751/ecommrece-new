

function Products({ users }) {
    return (
        <div>
            <h1>Hello</h1>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                    </div>
                )
            })}

        </div>
    )
}

export default Products

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {
        props: {
            users: data,
        },
    }
}

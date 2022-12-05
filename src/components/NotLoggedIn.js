const NotLoggedIn = () => {
    const pressed ={
        boxShadow: "inset 0 0 10px #aeaeae",
        borderRadius: '10px',
        background: '#fafafa',
    }

    const unPressed ={
        boxShadow: "0 0 10px #e0e0e0",
        borderRadius: '10px'
    }

    return (
        <div>
            <div class="mt-4 p-4 d-flex justify-content-center" style={{ fontSize: "30px" }} >
                You need to be logged in to view this page.
            </div>
            <a class="d-flex justify-content-center" href="/login" style={{ fontSize: "50px", color: "orange", textDecoration: 'none'}}>
                Log In
            </a>
        </div>
    );
}
     
export default NotLoggedIn;
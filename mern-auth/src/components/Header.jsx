

function Header(){

    return(
        <div className="bg-slate-200">
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <div className="font-bold">Auth App</div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Sign In</li>
                
            </ul>
            
            </div>
        </div>
    )
}

export default Header
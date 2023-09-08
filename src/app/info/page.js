'use client'

import { useRouter } from 'next/navigation'

function Home() {
    
    const router = useRouter()

    const handleBtn = () => {
        router.push("/")
    }

    return ( 
        <>
            Info
            <div>
                <button onClick={handleBtn}>Back Home</button>
                <button>Info</button>
                
            </div>
        </>
     );
}

export default Home;
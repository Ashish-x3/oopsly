import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-4 " style={{ background: "bg-white" }}>
            <div className="text-6xl">😿</div>
            <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
            <p className="text-lg">The page you're looking for doesn't exist or has been moved.</p>
        </div>
    )
}

export default page
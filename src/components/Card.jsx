import React from 'react'

export default function Card() {
    return (
        <>
            <div className="flex justify-center w-[365px] h-[396px]">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <div className='flex justify-center mt-5'>
                            <img className="w-[147.23px] h-[150px] rounded-full" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </div>
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-4xl font-medium mb-2 text-center">Card title</h5>
                        <p className="text-gray-800 text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

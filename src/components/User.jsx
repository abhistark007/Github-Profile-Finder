import React from 'react'

export default function User({userData}) {
    const img_url=userData.avatar_url??"https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=2048x2048&w=is&k=20&c=I2hcB4_I0xgLfbMe6IGP3NFR-HL1BuzqeFJhtOkZz0Y=";
    const name=userData.name??"Not Available";
    const bio=userData.bio??"Not Available";
    const public_repos=userData.public_repos??"Not Available";
    const followers=userData.followers??"Not Available";
    const following=userData.following??"Not Available";
    const login=userData.login??"#";
    
    return (
    <div className='flex flex-col gap-5 mx-auto max-[600px]:items-center'>
        {/* profile pic */}
        <div className='max-[600px]:h-[150px] max-[600px]:w-[150px] flex h-[300px] w-[300px] rounded-full overflow-hidden border-4 border-purple-600'>
            <img src={img_url} alt="" />
        </div>

        {/* Personal Details Container */}
        <div className='flex flex-col'>
            <div className='flex text-black text-xl gap-3'>
                <div className='font-bold'>Name: </div>
                <div>{name}</div>
            </div>
            <div className='flex text-black text-xl gap-3'>
                <div className='font-bold'>Bio: </div>
                <div>{bio}</div>
            </div>
        </div>

        {/* Profile Details */}
        <div className='flex flex-col'>
            <div className='flex text-black text-xl gap-3'>
                <div className='font-bold'>Public Repo :</div>
                <div>{public_repos}</div>
            </div>
            <div className='flex text-black text-xl gap-3'>
                <div className='font-bold'>Followers :</div>
                <div>{followers}</div>
            </div>
            <div className='flex text-black text-xl gap-3'>
                <div className='font-bold'>Following :</div>
                <div>{following}</div>
            </div>
        </div>

        {/* Redirect to github page */}
        <div className='bg-purple-600 rounded-lg p-3 text-white hover:scale-110 duration-200 cursor-pointer flex justify-center items-center text-xl'>
            <a target='_blank' href={`https://github.com/${login}`}>Goto Github Page</a>
        </div>
    </div>
  )
}

import React from 'react'


const ProfileCard = ({img, name, IDNmber, phoneNumber,email}) => {

    return (
        <div>
            <div className='personal-card-container'>
                <div className='personal-card'>
                    <div className='image'>
                        <img src={img} alt=''/>
                    </div>
                    <div className='content'>
                        <h1>{name}</h1>
                        <h3>ID: {IDNmber}</h3>
                        <h3> {phoneNumber}</h3>
                        <h3>Email: {email}</h3>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard

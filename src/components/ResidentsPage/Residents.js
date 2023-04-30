import React, { useState, useEffect } from 'react'
import ApiManager from '../../apiManager/apiManager'
import LoadingWheel from '../LoadingWheel/LoadingWheel'
import ResidentsTable from '../ApartmentInfo/ResidentsTable/ResidentsTable'
import './Residents.css'

const Residents = ({ coordinatorApartments }) => {
    const [residents, setResidents] = useState([])
    const [loading, setLoading] = useState(true)
    const instructorId = localStorage.getItem('instructorId')

    useEffect(() => {
        const apiManager = new ApiManager()

        let fetchInstructorResidents = async () => {
            let apartments = await apiManager.getResidentsByInstructorId(
                instructorId
            )
            setResidents(apartments)
            setLoading(false)
        }
        if (localStorage.getItem('instructorId')) {
            fetchInstructorResidents()
        } else {
            setLoading(false)
            setResidents(coordinatorApartments)
        }
    }, [coordinatorApartments, instructorId])
    try {
        return (
            <div className='instructor-residents-component'>
                <div className='loading-wheel'>
                    {loading ? <LoadingWheel /> : null}
                </div>
                <ResidentsTable residents={residents} />
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

export default Residents

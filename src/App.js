import './App.css'
import './global-styles/dark-style.css'
import React, { useEffect, useState } from 'react'
import Apartments from './components/ApartmentsPage/Apartments'
import ApartmentPage from './components/ApartmentInfo/ApartmentPage/ApartmentPage'
import ResidentInfoPage from './components/ResidentInfoPage/ResidentInfoPage/ResidentInfoPage'
import Home from './components/Home/Home'
import ServerError from './components/ServerError/ServerError'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import CoordinatorHome from './components/Coordinator_Dashboard/Coordinator_Home/CoordinatorHome'
import NewResident from './components/ApartmentInfo/AddNewResident/AddNewResident'
import Sidebar from './components/Sidebar/Sidebar'
import SchedulerDemo from './components/Instructor_Scheduler/Instructor_Scheduler'
import Residents from './components/ResidentsPage/Residents'
import AddNewApartment from './components/AddNewApartment/AddNewApartment'
import ReportPage from './components/ReportPage/ReportPage.js/ReportPage'
import CreateReport from './components/ReportPage/CreateReport/CreateReport'
import CoordinatorProfile from './components/CoordinatorProfile/CoordinatorProfile/CoordinatorProfile'
import InstructorProfile from './components/InstructorProfile/InstructorProfile/InstructorProfile'
import Instructors from './components/Coordinator_Dashboard/dashboard/Coordinator_Instructors/Inctructors'
import ShiftScheduler from './components/Scheduler/Scheduler'

const App = () => {
    const navigate = useNavigate()
    const [isLoggedin, setIsLoggedin] = useState(
        localStorage.getItem('token') || null
    )

    useEffect(() => {
        if (!isLoggedin) {
            navigate('/login')
        }
    }, [isLoggedin])

    return (
        <div className='main-page-container'>
            <>
                {isLoggedin ? (
                    <>
                        <Navbar className='navbar' />
                        <Sidebar className='sidebar' />
                    </>
                ) : null}

                <Routes>
                    <Route
                        path='/login'
                        element={
                            <SignIn
                                setIsLoggedin={setIsLoggedin}
                                isLoggedin={isLoggedin}
                            />
                        }
                    />
                </Routes>
            </>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/apartments' element={<Apartments />} />
                <Route path='/residents' element={<Residents />} />
                <Route
                    path='/apartments/apartment-info/:apartmentName'
                    element={<ApartmentPage />}
                />
                <Route
                    path='/apartments/apartment-info/resident/:residentId'
                    element={<ResidentInfoPage />}
                />
                <Route
                    path='/apartments/apartment-info/resident/new-resident'
                    element={<NewResident />}
                />
                <Route
                    path='/apartments/apartment-info/apartment/new-apartment'
                    element={<AddNewApartment />}
                />
                <Route path='/server-error' element={<ServerError />} />
                <Route
                    path='/scheduler'
                    element={<SchedulerDemo shifts={[]} />}
                />
                <Route
                    path='/apartments/:instructorId'
                    element={<Apartments />}
                />
                <Route
                    path='/Coordinator/dashboard/:id'
                    element={<CoordinatorHome />}
                />
                <Route
                    path='/Coordinator/profile'
                    element={<CoordinatorProfile />}
                />
                <Route path='/reports' element={<ReportPage />} />
                <Route
                    path='/reports/create-report/:apartmentName'
                    element={<CreateReport />}
                />
                <Route
                    path='/instructor/profile'
                    element={<InstructorProfile />}
                />
                <Route
                    path='/coordinator/instructors'
                    element={<Instructors />}
                />
                <Route
                    path='/coordinator/schedule'
                    element={<ShiftScheduler />}
                />
            </Routes>
        </div>
    )
}

export default App

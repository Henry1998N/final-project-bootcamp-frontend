import './Home.css'
import './Widgets/Widgets'
import '../ApartmentsTable/ApartmentsTable'
import Widgets from './Widgets/Widgets'
import Apartments from '../ApartmentsPage/Apartments';

export default function Home() {
    return (
        <>
            <div className='home-page'>
                <div className='home-container'>
                    <Widgets />
                    <Apartments />
                </div>
            </div>
        </>
    )
}

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = ({ info }) => {
    return (
       <header className="header">
           <h1><Icon icon={locationIcon} /> Wildfire Tracker (Powered by NASA)</h1>
       </header>
    )
}

export default Header;
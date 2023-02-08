import css from './Header.module.css'
import UserLogin from '../user-login/UserLogin'

function Header() {
    return (
        <header className={css.header}>

            <div className={css.logo}>
                Awesome Kanban Board
            </div>
                
            {/* <div className={css.userMenu}>{UserLogin} */}
            <div><UserLogin />
                {/* <img src="/img/user-avatar.svg" alt="user-avatar"/>
                <img src="/img/arrow-down.svg" alt="user-arrow"/> */}
            </div> 
        </header>
    )
}
export default Header
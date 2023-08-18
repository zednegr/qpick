import "./header.scss"
import 'boxicons'

function Header() {

    return (
        <section className="navbar-section">
            <div className="container">
                <nav className="navbar">

                    <div className="navbar-left">

                        <div className="navbar-brand">
                            <h2 className="brand-h2">QPICK</h2>
                        </div>

                        <div className="navbar-filter">
                            <box-icon type='solid' name='mobile'></box-icon>
                            <h4 className="navbar-filter-h4">Выбрать модель телефона</h4>
                            <select name="" id=""></select>
                        </div>

                    </div>

                    <ul className="nav-list">
                        <li><box-icon name='heart'></box-icon></li>
                        <li><box-icon name='shopping-bag'></box-icon></li>
                    </ul>

                </nav>
            </div>
        </section>
    )
}

export default Header
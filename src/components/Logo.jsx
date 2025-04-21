import logo from '../assets/img/EscudoPeque.svg';

export const Logo = ({text}) => {
    return (
        <div className='auth-from-logo-container'>
            <img src={logo} alt="Logo Kinal" />
            <span>{text}</span>
        </div>
    )
}
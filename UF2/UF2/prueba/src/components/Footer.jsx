const Footer = () => {
    return(
        <>
            <p style={{
                position: 'fixed', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                margin: 0,
                padding: '10px',
                backgroundColor: '#fff',
                textAlign: 'center',
                width: '100%',
                fontSize: '14px',
                boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
            }}>
                © 2023 Cartelera de Películas
            </p>
        </>
    )
}

export default Footer;

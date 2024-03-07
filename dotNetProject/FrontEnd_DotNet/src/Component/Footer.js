import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <h2>Tourpia</h2>
            <h6>Juhu Taj, Juhu, Mumbai 400049</h6>
            <h6>Tel.: (+91 22)  1234 5678</h6>


            <p>© 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
    },
};

export default Footer;
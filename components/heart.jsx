export const Heart3D = ({ setOpenBook }) => {
    return (
        <div onClick={ () => setOpenBook(true) } style={ { cursor: "pointer" } }>
            <div className="heart" />
            <div className="heart-text">
                <p>This is my heart ❤️</p>
                <p>Jo sirf tumhare lie dhadakta hai.</p>
                <p>Want to see what's inside?</p>
                <p><strong>Khol ke dekh lo</strong> 🔥</p>
            </div>
        </div>

    );
};


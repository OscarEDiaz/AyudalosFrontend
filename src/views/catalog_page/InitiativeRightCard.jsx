
export const InitiativeRightCard = ({ cardData }) => {
    const { detailedCard: { initiativeTitle, bigDescription } } = cardData;

    return (
        <div className='iniciative-main-frame' >
            <div
                className="banner"
                style={{ 'backgroundImage': 'url(https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785076_1280.jpg)' }}
            >
                <div className="faded-bg">
                    <h2>{initiativeTitle}</h2>
                </div>
            </div>
            <div className="description">
                <h2 className="description-h2">Descripción</h2>
                <p className="iniciative-description">
                    {bigDescription}
                </p>
            </div>
            <button className="iniciative-donate-btn">
                <h3>Donar</h3>
            </button>
        </div>
    )
}

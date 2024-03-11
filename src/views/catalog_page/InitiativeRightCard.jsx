import axios from 'axios';

export const InitiativeRightCard = ({ cardData }) => {
    const { detailedCard: { initiativeTitle, bigDescription, bannerUrl, accountId, priceId } } = cardData;

    return (
        <div className='iniciative-main-frame' >
            <div
                className="banner"
                style={{ 'backgroundImage': `url(${bannerUrl})` }}
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
            <form action={`${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`} method="post">
                <button className="iniciative-donate-btn" type='submit'>
                    <h3>Donar</h3>
                </button>
            </form>
        </div>
    )
}

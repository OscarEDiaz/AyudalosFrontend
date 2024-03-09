import { Tag } from "./index.js";

import '../../styles/catalog_page/iniciativeCard.css';

export const IniciativeCard = ({ name }) => {
    // TODO: Add tags
    const tags = ['Dogs', 'Cats', 'Horses'];

    return (
        <div className="iniciative">
            <div className="iniciative-header">
                <div>
                    <h3 className="iniciative-h3">Lorem ipsum dolor et asimet</h3>
                    <p className="iniciative-sub-h3">Lorem ipsum dolor</p>
                </div>
                <img className="org-logo" src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785076_1280.jpg" alt="organization logo" />
            </div>
            <p className="iniciative-summary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni provident labore, nobis recusandae aliquid, omnis repudiandae soluta quae, porro consectetur. Voluptates voluptas eveniet dicta harum asperiores adipisci ex animi.</p>
            <div className="tags">
                { tags.map((tag) => <Tag tag={tag} />) }
            </div>
        </div>
    )
}

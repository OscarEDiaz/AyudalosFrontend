import { useContext, useEffect, useState } from "react";

import { Tag } from "./index.js";

import { CatalogContext } from "../../context/catalog/CatalogContext.jsx";

import '../../styles/catalog_page/iniciativeCard.css';

export const IniciativeCard = ({ data, index }) => {
    const { initiativeTitle, organizationName, tags, smallDescription } = data;

    const { changeDisplayedInitiative, selectedInitiativeIndex } = useContext(CatalogContext);
    const [isToggled, setIsToggled] = useState(selectedInitiativeIndex === index);

    // When a card is toggled it must change the information that is displayed in the right section
    const toggleCard = () => {
        if (isToggled) {
            changeDisplayedInitiative(-1);
        } else {
            changeDisplayedInitiative(index);
        }

        setIsToggled(!isToggled)
    }

    useEffect(() => {
        setIsToggled(selectedInitiativeIndex === index)
    }, [selectedInitiativeIndex])


    return (
        <div
            className={`iniciative`}
            onClick={() => toggleCard()}
        >
            <div className="iniciative-header">
                <div>
                    <p className={`iniciative-h3 ${isToggled ? 'iniciative-toggled' : ''}`}>{initiativeTitle}</p>
                    <p className="iniciative-sub-h3">{organizationName}</p>
                </div>
                <img className="org-logo" src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785076_1280.jpg" alt="organization logo" />
            </div>
            <p className="iniciative-summary">{smallDescription}</p>
            <div className="tags">
                {tags.map((tag, i) => <Tag key={i} tag={tag} />)}
            </div>
        </div>
    )
}

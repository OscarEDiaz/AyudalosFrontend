
export const Tag = ({tag}) => {
    return (
        <div 
            className="tag"
            style={{
                'backgroundColor': tag.backgroundColor,
                'color': tag.textColor,  
            }}
        >
            <p className="tag-txt">{tag.name}</p>
        </div>
    )
}

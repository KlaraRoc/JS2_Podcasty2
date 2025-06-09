import './index.css'

export const Episode = (props) => {
    return (
            <div className="episode">
                <div className="episode__num">{props.num}</div>
                <div className="episode__body">
                <div className="episode__title">{props.title}</div>
                <div className="episode__guest">host: {props.guest}</div>
                </div>
            </div>
    )
}
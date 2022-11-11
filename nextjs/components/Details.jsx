export default function Details(props) {
    return (
        <div style={{"padding-top": "2em;", "padding-bottom": "2em;"}}>
            <h3 class="mg-md">
                Details of the offer
            </h3>
            <p>{props.description}</p>
        </div>
    )
}
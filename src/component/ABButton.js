function ABButton(props) {
    console.log(props);
    return (
        <button>
        style={{
            backgroundColor: props.className == "abc" ?
            "red" : "green",
            color: "white",
            borderRadius:100,
            border: "none",
        }}
    {props.label}
    </button>
    );
}

export default ABButton;
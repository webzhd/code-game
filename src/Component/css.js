import init from '../Jss/index';

const style = {
    content: {
        display: "block",
        overflow: "hidden",
        width: "100%",
        border: 0,
        borderBottom: "1px solid #ddd",
        outline: "none",
        height: "30px",
        lineHeight: "30px",
        fontSize: "18px",
        fontFamily: 'Arial',
        "&:focus": {
            borderBottom: "1px solid #a6c8ff"
        },
        "& $success": {
            color: "#0f0"
        },
        "& $error": {
            color: "#f00"
        }
    },
    "success": {
        
    },
    "error": {
        
    }
}

export default init(style);
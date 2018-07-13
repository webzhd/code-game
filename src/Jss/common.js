import init from './index';

const style = {
    content: {
        width: "1000px",
        margin: "0 auto",
        padding: "10px 100px",
        borderLeft: "1px solid #ddd",
        borderRight: "1px solid #ddd"
    },
    button: {
        display: "inline-block",
        padding: "7px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        "&.primary":{
            backgroundColor: "#1890ff",
            color: "#fff",
        }
    }
}

export default init(style);
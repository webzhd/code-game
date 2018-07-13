import jss from 'jss';
import preset from "jss-preset-default";
jss.setup(preset())
function jssInit(styles){
    const sheet = jss.createStyleSheet(styles)
    const {classes} = sheet.attach();
    return classes
}
export default jssInit
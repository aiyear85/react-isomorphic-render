import ReactDOMServer from 'react-dom/server'
import ReactDOMStream from "react-dom-stream/server";

// Renders React page content element
// (wrapping it with the <Html/> component)
// to the resulting Html markup code
// (returns a string containing the final html markup)
//
export default function render_on_server({ render_webpage_as_react_element, page_element })
{
  let d = new Date(); console.log("Render start: ", d.getSeconds(), d.getMilliseconds());
  let ret = '<!doctype html>\n' + ReactDOMStream.renderToString(render_webpage_as_react_element(page_element))
  let d2 = new Date(); console.log("Render end: ", d2.getSeconds(), d2.getMilliseconds());
	return ret 
}

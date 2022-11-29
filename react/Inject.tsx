import React, { useEffect } from "react";
// import { canUseDOM } from "vtex.render-runtime";


interface InjectProps {
  javascript: string
  style: string
}

const Inject: StorefrontFunctionComponent<InjectProps> = ({ javascript, style }) => {

  useEffect(() => {
    if (!javascript) return;
    const execute = new Function(javascript);
    execute();
  })

  return (<>

    {style && <style dangerouslySetInnerHTML={{ __html: style }} />}
    {javascript && <div data-javascript={javascript} />}

  </>)

}

Inject.schema = {
  title: "Inject",
  description: "",
  type: "object",
  properties: {
    inject: {
      title: "Inject Code",
      type: "string",
      description: "<script>, <style> or <html> elements."
    }
  }
}

export default Inject;
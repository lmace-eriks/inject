import React, { useEffect, useMemo, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

// Styles
import styles from "./styles.css";

interface InjectProps {
  inject: string
}

const Inject: StorefrontFunctionComponent<InjectProps> = ({ inject }) => {


  return (
    <div dangerouslySetInnerHTML={{ __html: inject }} />
  )

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
import React, { useEffect, useState } from "react"

const Image = ({ src, ...rest }) => {
  const [source, setSource] = useState(null)
  useEffect(() => {
    import(`../images/${src}`).then(module => setSource(module.default))
  }, [src])

  if (source === null) return null;

  return <img src={source} {...rest} />
}

export default Image

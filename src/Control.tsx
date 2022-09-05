import L from 'leaflet'
import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  position: L.ControlPosition
  children?: React.ReactNode
  container?: React.HTMLAttributes<HTMLDivElement>
  containerId?: string | number
  prepend?: boolean
}

const POSITION_SELECTORS = {
  bottomleft: '.leaflet-bottom.leaflet-left',
  bottomright: '.leaflet-bottom.leaflet-right',
  topleft: '.leaflet-top.leaflet-left',
  topright: '.leaflet-top.leaflet-right',
}

const Control = (props: Props): JSX.Element => {
  const [portalRoot, setPortalRoot] = React.useState<any>(document.createElement('div'))
  const positionSelector = ((props.position && POSITION_SELECTORS[props.position]) || POSITION_SELECTORS.topright)
  const portalContainer = document.createElement('div')

  React.useEffect(() => {
    const querySelectors = `${props?.containerId && `#${props?.containerId}`} ${positionSelector}`.trim()
    const targetDiv = document.querySelectorAll(querySelectors)
    setPortalRoot(targetDiv[0])
  }, [positionSelector, props?.containerId])

  if (props.prepend !== undefined && props.prepend === true) {
    portalRoot.prepend(portalContainer)
  } else {
    portalRoot.append(portalContainer)
  }

  const className = (props.container?.className?.concat(' ') || '') + 'leaflet-control'
  const container = { ...props.container, className }
  const controlContainer = (
    <div {... container}>{props.children}</div>
  )

  L.DomEvent.disableClickPropagation(portalRoot)

  return ReactDOM.createPortal(
    controlContainer,
    portalContainer
  )
}

export default Control

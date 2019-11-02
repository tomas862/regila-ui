import { h } from "@stencil/core";

export function getIcon(type: string, props) {

  switch (type) {
    case 'menu':
      return <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={props.fill}/>
      </svg>;
    case 'close':
      return <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`}>
        <path fill={props.fill} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>;
    case 'local_phone':
      return <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill={props.fill} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    case 'mail_outline':
      return <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={props.fill} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
      </svg>
    default:
      return undefined;
  }
}

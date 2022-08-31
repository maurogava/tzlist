

import tz from "./tz-list.json";

export interface TimeZone {
  tz: string
  label?: string
  offsetSTD: string
  offsetDST?: string
  tzNameSTD?: string
  tzNameDST?: string
  linkTo?: string
}

export default tz as TimeZone[];
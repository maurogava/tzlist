

import tz from "./tz-list.json";

interface TimeZone {
  tz: string
  offsetSTD: string
  offsetDST?: string
  tzNameSTD?: string
  tzNameDST?: string
  linkTo?: string
}

export default tz as TimeZone[];
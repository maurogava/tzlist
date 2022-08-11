# timezone-data
IANA Time zone data

# timezones-list
This package contains a list of time zones from release [2022b](https://www.iana.org/time-zones) of the tz database. Data extracted from [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

The fields in the array are as follows:
* `tz` contains the `tz` codes
* `offsetSTD` contains the offset from UTC for Standard Time
* `offsetDST` contains the offset from UTC for Daylight Saving Time
* `tzNameSTD` contains the time zone name for Standard Time
* `tzNameDST` constains the time zone name for Daylight Saving Time
* `linkTo` constains the time zone code in case that the `tz` is deprecated

## Install
```bash
npm install tzlist --save

# or

yarn add tzlist
```

## Example
```javascript
import tz from 'tzlist';

// or

const tz = require('tzlist');
```

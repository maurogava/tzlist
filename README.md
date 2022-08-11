# timezone-data
This package contains a list of time zones from release [2022b](https://www.iana.org/time-zones) of the IANA tz database. 

Data extracted from [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

The fields in the array are as follows:
* `tz` contains the time zone code
* `offsetSTD` contains the offset from UTC for Standard Time
* `offsetDST` contains the offset from UTC for Daylight Saving Time
* `tzNameSTD` contains the time zone name for Standard Time
* `tzNameDST` constains the time zone name for Daylight Saving Time
* `linkTo` constains the updated time zone code in case that the `tz` is deprecated

## Install
```bash
npm install timezone-data --save

# or

yarn add timezone-data
```

## Example
```javascript
import tz from 'timezone-data';

// or

const tz = require('timezone-data');
```

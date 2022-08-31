# timezone-data
This package contains a list of time zones from release [2022b](https://www.iana.org/time-zones) of the IANA tz database. 

Data extracted from [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

**Note:** in order to reduce package size there are some fields that if they don't have a value or they value can be infered from other field they are not included in the JSON list.

The fields in the array are as follows:

* `tz`: contains the time zone code. *Always present*.
* `label`: *Only present in no deprecated time zones*. Time zone Friendly name that can be shown to the user.
* `offsetSTD`: contains the offset from UTC for Standard Time. *Always present*.
* `offsetDST`: contains the offset from UTC for Daylight Saving Time. *Only present if there is a Daylight Saving Time for that time zone, otherwise you can asume its value it's the same as `offsetSTD`*.
* `tzNameSTD`: contains the time zone name for Standard Time. *Always present*.
* `tzNameDST`: constains the time zone name for Daylight Saving Time. *If it doesn't have Daylight Saving time this field is not returned and you can safely asume it's the same as `tzNameSTD`*.
* `linkTo`: constains the updated time zone code in case that the `tz` is deprecated. *This field is only present if the `tz` is deprecated*.

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

These are examples of some entries of the time zone list:

```json
{
  "tz": "America/Argentina/Buenos_Aires",
  "label": "Argentina Standard Time - Buenos Aires",
  "offsetSTD": "-03:00",
  "tzNameSTD": "-03"
},
{
  "tz": "America/Montreal",
  "offsetSTD": "-05:00",
  "offsetDST": "-04:00",
  "tzNameSTD": "Eastern Standard Time",
  "tzNameDST": "Eastern Daylight Time",
  "linkTo": "America/Toronto"
},
{
  "tz": "America/New_York",
  "label": "Eastern Time - New York",
  "offsetSTD": "-05:00",
  "offsetDST": "-04:00",
  "tzNameSTD": "Eastern Standard Time",
  "tzNameDST": "Eastern Daylight Time"
},
{
  "tz": "America/Toronto",
  "label": "Eastern Time - Toronto",
  "offsetSTD": "-05:00",
  "offsetDST": "-04:00",
  "tzNameSTD": "Eastern Standard Time",
  "tzNameDST": "Eastern Daylight Time"
},
{
  "tz": "Europe/Paris",
  "label": "Central European Time - Paris",
  "offsetSTD": "+01:00",
  "offsetDST": "+02:00",
  "tzNameSTD": "Central European Time",
  "tzNameDST": "Central European Summer Time"
},
{
  "tz": "Asia/Tokyo",
  "label": "Japan Standard Time",
  "offsetSTD": "+09:00",
  "tzNameSTD": "Japanese Standard Time"
},
{
  "tz": "Japan",
  "offsetSTD": "+09:00",
  "tzNameSTD": "Japanese Standard Time",
  "linkTo": "Asia/Tokyo"
},
```
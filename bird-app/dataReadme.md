##  Data Examples
### Species List for a Region
data from   url: 'https://api.ebird.org/v2/product/spplist/{{locId}}',
{
  "projId": "EBIRD",
  "subId": "S29893687",
  "protocolId": "P21",
  "locId": "L99381",
  "durationHrs": 1,
  "allObsReported": false,
  "creationDt": "2018-01-04 14:30",
  "lastEditedDt": "2018-01-09 18:45",
  "obsDt": "2018-01-04 23:29",
  "obsTimeValid": true,
  "checklistId": "CL22224",
  "numObservers": 1,
  "subnational1Code": "US-NY",
  "submissionMethodCode": "EBIRD_api",
  "userDisplayName": "Tim Lenz",
  "obs": [
    {
      "speciesCode": "gwfgoo",
      "hideFlags": [],
      "obsDt": "2018-01-04 18:29",
      "subnational1Code": "US-NY",
      "howManyAtleast": 1,
      "howManyAtmost": 1,
      "howManyStr": "1",
      "present": false,
      "projId": "EBIRD",
      "subId": "S29893687",
      "obsId": "OBS406047821"
    },
    {
      "speciesCode": "gwfgoo2",
      "hideFlags": [],
      "obsDt": "2018-01-04 18:29",
      "subnational1Code": "US-NY",
      "howManyAtleast": 1,
      "howManyAtmost": 1,
      "howManyStr": "1",
      "present": false,
      "projId": "EBIRD",
      "subId": "S29893687",
      "obsId": "OBS406047822"
    },
    {
      "speciesCode": "cacgoo1",
      "hideFlags": [],
      "obsDt": "2018-01-04 18:29",
      "subnational1Code": "US-NY",
      "howManyAtleast": 1,
      "howManyAtmost": 1,
      "howManyStr": "1",
      "present": false,
      "projId": "EBIRD",
      "subId": "S29893687",
      "obsId": "OBS406047820",
      "obsAux": [
        {
          "subId": "S29893687",
          "obsId": "OBS406047820",
          "speciesCode": "cacgoo1",
          "fieldName": "breeding_code",
          "entryMethodCode": "ebird_breeding",
          "auxCode": "UN",
          "value": "C4"
        }
      ]
    }
  ]
}

### Recent observations in a region 
data from  url: 'https://api.ebird.org/v2/data/obs/KZ/recent',
 
[
  {
    "speciesCode": "hoocro1",
    "comName": "Hooded Crow",
    "sciName": "Corvus cornix",
    "locId": "L7884500",
    "locName": "улица Старикова, Chundzha KZ-Almaty (43.5309,79.4551)",
    "obsDt": "2020-01-21 16:35",
    "howMany": 1,
    "lat": 43.530936,
    "lng": 79.455132,
    "obsValid": true,
    "obsReviewed": false,
    "locationPrivate": true,
    "subId": "S63619695"
  },
  {
    ...
  },
  {

  },
]
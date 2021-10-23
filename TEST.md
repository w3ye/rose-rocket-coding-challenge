# Test

## Front-end Test

### Moving an order to unassigned

&ensp; Drag an order 1 from driver 1 to unassigned

&ensp; Retrieve order 1 from database

&ensp; Order 1 driver_id should be null

### Editing Revenue of an order

&ensp; To edit Order 1, order 1 should be in unassigned column

&ensp; Click on the edit button

&ensp; Change the value of the revenue

&ensp; Retrieve the order from the database

&ensp; The revenue of the order should be equal to the changed value

## Back-end Test

### Retrieve driver 1

&ensp; Driver 1 exists in database

&ensp; Retrieve driver 1 from database

&ensp; Retrieved data should equals expected data

### Retrieve an unexisted driver

&ensp; Retrieve driver -1

&ensp; Retrieved data should be equal to undefined

### Retrieve all drivers

&ensp; Retrieve all drivers

&ensp; Retrieved drivers should equal to teh expected drivers

### Remove a driver from an order

&ensp; set the order driver id to null

&ensp; update the order

&ensp; store the order to database

&ensp; retrieve the changed order from database

&ensp; order's driver id should equal null

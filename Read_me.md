<h6>Documentation<h6>

<h3>Sample request and response of  methods used<h3>

1.  <h5>Create Room </h5>

    1. `POST` - https://sathya-hall-booking-node-app.herokuapp.com/createroom
    

    2. sample request
            {
            "seat_count":60,
            "amenities":["Blinder","projector","chairs","Computer","CCTV"],
            "room_name":"Executive",
            }
            
       Sample Response

            {
            "msg": "Insuffecient details, Kindly provide all the following details seat_count, amenities, room_name,price_per_hour"
            }

    3. sample request
            {
            "seat_count":50,
            "amenities":["Blinder","projector","chairs","Computer","CCTV"],
            "room_name":"Deulex",
            "price_per_hour" : 5000
            }
            
       Sample Response

            {
            "acknowledged": true,
            "insertedId": "62d481a2516b78957c421657"
            }

       ObjectId(insertedId)(_id) - is considered as room id for booking room

2.  <h5>Book Room </h5>

    1. `POST` - https://sathya-hall-booking-node-app.herokuapp.com/bookroom

    2. Sample request
    
           {
            "customer_name":"Boopathi",
            "booking_date" : "2022-07-17",
            "start_time":"10:00",
            "end_time":"13:00",
            "id":"62d4896b516b78957c42165a"
            }
           
        Sample response

            1. If room booked successfully

                {
                    "acknowledged": true,
                    "insertedId": "62d489ae516b78957c42165b"
                }

            2. If time slot is already booked by other customer
            
                Room is already booked for this time slot
                

3.  <h5>List All Room </h5>

    1. `GET` - https://sathya-hall-booking-node-app.herokuapp.com/listrooms
    
    2. Sample Response

    [
    {
        "room number": "62d48156516b78957c421656",
        "room name": "Executive",
        "Booking Status": "Booked",
        "customer name": "Sathya",
        "booking time": "2022-07-18T00:00:00.000Z",
        "start time": "2022-07-18T11:00:00.000Z",
        "end date": "2022-07-18T14:00:00.000Z"
    },
    {
        "room number": "62d481a2516b78957c421657",
        "room name": "Dulexe",
        "Booking Status": "Booked",
        "customer name": "John",
        "booking time": "2022-07-15T00:00:00.000Z",
        "start time": "2022-07-15T12:00:00.000Z",
        "end date": "2022-07-15T13:00:00.000Z"
    },
    {
        "room number": "62d4896b516b78957c42165a",
        "room name": "meeting",
        "Booking Status": "Booked",
        "customer name": "Boopathi",
        "booking time": "2022-07-17T00:00:00.000Z",
        "start time": "2022-07-17T10:00:00.000Z",
        "end date": "2022-07-17T13:00:00.000Z"
    }
]

4.  <h5>List All Customers </h5>
    1. `GET` - https://sathya-hall-booking-node-app.herokuapp.com/listcustomers
    2. Sample response
    [
    {
        "customer name": "Sathya",
        "room name": "Executive",
        "booking date": "2022-07-18T00:00:00.000Z",
        "start time": "2022-07-18T11:00:00.000Z",
        "end time": "2022-07-18T14:00:00.000Z"
    },
    {
        "customer name": "John",
        "room name": "Dulexe",
        "booking date": "2022-07-15T00:00:00.000Z",
        "start time": "2022-07-15T12:00:00.000Z",
        "end time": "2022-07-15T13:00:00.000Z"
    },
    {
        "customer name": "Boopathi",
        "room name": "meeting",
        "booking date": "2022-07-17T00:00:00.000Z",
        "start time": "2022-07-17T10:00:00.000Z",
        "end time": "2022-07-17T13:00:00.000Z"
    }
]

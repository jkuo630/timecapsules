# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import datetime, timezone, timedelta
import os
from twilio.rest import Client

def marcus(message, startTimes): # NEEDS PHONE NUMBER -----------

    datesArray = parse_dates(startTimes)
    schedule_dates_array = add_days_to_dates(datesArray)
    print(schedule_dates_array)


    # setup account info -- put in .env 
    account_sid = 'ACd5c15461c9aed877d5a72ff1608e0945' # given acc_sid
    auth_token = '0c02785b92ec7134cbc92942a97c951f'  # given auth token
    client = Client(account_sid, auth_token)

    # messageDemoInstant("Hello, your pill scheduling has been confirmed! Stay Healthy!") # FOR CONFIRMATION
    message = client.messages.create(
        from_='+16592228774',
        body="Hello, your pill scheduling has been confirmed! Stay Healthy!", # replace with message
        to='+16043568278'
        )
    print(message.sid)

    for dates in schedule_dates_array:
        print(dates)
        message = client.messages \
            .create(
                body=message, # replace with message
                messaging_service_sid='MG99dc5b9921885ba4ee0697951046edf3', # 
                #  from_='+16592228774',
                send_at=dates, # scheduled message
                schedule_type='fixed',
                to='+16043568278' # UPDATE TO USE PHONE NUMBER PARAMETER ---------
            )
        print(message.sid + ' printed new date')

def parse_dates(input_string):
    # Check if the input string is empty
    if not input_string.strip():
        return []

    # Split the input string into an array of date strings
    date_strings = [date.strip() for date in input_string.split(',')]

    return date_strings


def add_days_to_dates(date_strings):
    # Initialize an empty array to store the modified dates
    modified_dates = []

    # Loop through each date string
    for i in range(2):

        for date_string in date_strings:
            
            # Convert the date string to a datetime object
            current_date = datetime.strptime(date_string, '%Y-%m-%dT%H:%M:%SZ')

            # Add 8 hours to the current time to account for utc
            new_time = current_date + timedelta(days=i)

            concatenated_string = new_time.strftime('%Y-%m-%dT%H:%M:%SZ')

            modified_dates.append(concatenated_string)

    return modified_dates

marcus('Reminder for Hohn, 23 years old: Please take your medicine, Crack. Chew 2 gummies once a day with food, ensuring a few hours gap before or after other medications or natural health products.', '2024-01-21T09:00:00Z') # NEED TO BE UPDATED TO TAKE IN PHONE NUMBER ----

def messageDemoInstant(message):
    message = client.messages.create(
                                  from_='+16592228774',
                                  body=message, # replace with message
                                  to='+16043568278'
                              )
    print(message.sid)


        
        # --- DON'T NEED THIS CODE BECAUSE ALREADY CONNECTED IT TO SENDERS? --- 
        # # create the messaging service to use - 
        # service = client.messaging \
        #             .v1 \
        #             .services \
        #             .create(friendly_name='My First Messaging Service')

        # print(service.sid) # this service id will be used 

        # # -- add the phone number to the list of senders
        # phone_number = client.messaging \
        #                 .v1 \
        #                 .services(service.sid) \
        #                 .phone_numbers \
        #                 .create(
        #                     phone_number_sid='PNaace68c4f6185168dc63bb30ed3cf70f'
        #                 )
        # print(phone_number.sid)

    # messageScheduler(schedule_dates_array, message)

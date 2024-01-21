# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import datetime, timezone, timedelta
import os
from twilio.rest import Client

def schedulingMessage(message, startTimes):

    datesArray = parse_dates(startTimes)
    schedule_dates_array = add_days_to_dates(datesArray)
    print(schedule_dates_array)


    # setup account info -- put in .env 
    account_sid = 'ACd5c15461c9aed877d5a72ff1608e0945' # given acc_sid
    auth_token = '0c02785b92ec7134cbc92942a97c951f'  # given auth token
    client = Client(account_sid, auth_token)

    for dates in schedule_dates_array:
        print(dates)
        message = client.messages \
            .create(
                body=message, # replace with message
                messaging_service_sid='MG99dc5b9921885ba4ee0697951046edf3', # 
                #  from_='+16592228774',
                send_at=dates, # scheduled message
                schedule_type='fixed',
                to='+16043568278' # twilio given number +16592228774
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
    for i in range(1):

        for date_string in date_strings:
            
            # Convert the date string to a datetime object
            current_date = datetime.strptime(date_string, '%Y-%m-%dT%H:%M:%SZ')

            # Add 8 hours to the current time to account for utc
            new_time = current_date + timedelta(hours=8)

            concatenated_string = new_time.strftime('%Y-%m-%dT%H:%M:%SZ')

            modified_dates.append(concatenated_string)

    return modified_dates

schedulingMessage('hi', '2024-01-20T19:40:50Z')

def messageDemoInstant(message):
    message = client.messages.create(
                                  from_='+16592228774',
                                  body='Hi there', # replace with message
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

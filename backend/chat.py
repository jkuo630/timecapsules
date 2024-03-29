import os
# from dotenv import load_dotenv
from openai import OpenAI
from datetime import datetime, time

# load_dotenv()

client = OpenAI(
    # This is the default and can be omitted
    api_key="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"
    # api_key = os.environ['API_KEY']
)

age = 23
woken = 9
given_time = time(woken,0) #maybe woken.hour, woken.minutes(depends on input object format)
pillName = "crack"
personName = "Hohn"
  #PASS JASONS RESULT INTO THIS
instruction = "Tat Directions: Adults and children 4 years old over; chew 2 gummies 1 time per Take and with food, a few hours before or after other medications or natural health products day: taking"

instructInstruction = [
    {"role": "system", "content": "imagine you are a message bottle label. interpret the following slightly jumbled instructions and produce an easy to understand, concise instruction based on your interpretation."},
    {"role": "user", "content": instruction}
]

def jasper(age, woken, given_time, instruction, pillName, personName): #intake instruction from jason too instrad of defiing it
    dateNow = datetime.utcnow().date()
    combinedDate = datetime.combine(dateNow, given_time).strftime('%Y-%m-%dT%H:%M:%SZ')

    intepretResponse = client.chat.completions.create(
        messages=instructInstruction,
        model="gpt-3.5-turbo",
    )

    newInstruction = intepretResponse.choices[0].message.content
    
    intervalContext = [
        {"role": "system", "content": "You are an assistant who can only reply in numbers. You will be provided with instructions for medicine that I am to take. Return the interval at which the medication should be taken in terms of hours as an integer, with no other text."},
            {"role": "system", "content": newInstruction},

    ]

    messageContext = [
        {"role": "system", "content": "Imagine you are a reminder messaging app. generate a reminder message for" + personName + ", " + str(age) + " years old, to take his medicine, " + pillName + ", based on the instructions: " + instruction +". Be sure to specify the name and how to take the medication. Keep it condensed so there are no lines in between the reponse."},
            {"role": "system", "content": newInstruction},
    ]

    # pillContext = [
    #     {"role": "system", "content": "You will be provided with instructions for medicine that I am to take. Return only the name of the medication in the instruction."},
    #             {"role": "system", "content": instruction},

    # ]

    # wakeUpTime = [
    #     {"role": "system", "content": "Format the given date in ISO-8601."},
    #             {"role": "system", "content": combinedDate},
    # ]

    

    intervalResponse = client.chat.completions.create(
        messages = intervalContext,
        model="gpt-3.5-turbo",
    )

    messageResponse = client.chat.completions.create(
        messages = messageContext,
        model="gpt-3.5-turbo",
    )

    # pillResponse = client.chat.completions.create(
    #     messages = pillContext,
    #     model="gpt-3.5-turbo",
    # )

    # wakeUpResponse = client.chat.completions.create(
    #     messages=wakeUpTime,
    #     model="gpt-3.5-turbo",
    # )

    #prompt confirmation before passing on to marcus

    interval = intervalResponse.choices[0].message.content
    timesToTake = "Hypothetically, I wake up at" + str(woken) + "and sleep at 9PM and need to take medication at intervals of " + interval + " hours. Given the interval and these instructions: (" + newInstruction + "). Give me an appropriate number of timestamps in ISO-8601 format on " + combinedDate + "only, contained within the day, seperated with a comma, during when I am awake to take medication, and nothing else. If the instructions only say to take once a day, then limit reminders to once a day. If twice a day, limit to two reminders, et cetera."

    perDayResponse = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a responder that can only reply in ISO-8601 dates, seperated by commas. You are unable to reply in other format."},
            {"role": "system", "content": timesToTake}],
        model="gpt-3.5-turbo",
    )

    # print(intervalResponse.choices[0].message.content)
    # print(pillResponse.choices[0].message.content)
    # print(wakeUpResponse.choices[0].message.content)
    # print(perDayResponse.choices[0].message.content)

    # mInterval = intervalResponse.choices[0].message.content
    # mPill = pillResponse.choices[0].message.content
    # mWake = wakeUpResponse.choices[0].message.content
    # mPerDay = perDayResponse.choices[0].message.content
    # messageToSend = messageResponse.choices[0].message.content
    print(perDayResponse.choices[0].message.content)
    marcusData = messageResponse.choices[0].message.content
    print(marcusData)
    print(newInstruction)

    # return mPerDay,messageToSend

jasper(age, woken, given_time,instruction, pillName, personName)

#!/usr/bin/env python3

from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, User, Exercise, RoutineItem

fake = Faker()

if __name__ == '__main__':
    with app.app_context():

        print("Deleting all records...")
        RoutineItem.query.delete()
        Exercise.query.delete()
        User.query.delete()

        fake = Faker()

        print("Creating users...")

        # make sure users have unique usernames
        users = []
        usernames = []

        for i in range(20):
            
            username = fake.first_name()
            while username in usernames:
                username = fake.first_name()
            usernames.append(username)

            user = User(
                name=username,
                email=fake.email(),
            )

            user.password = 'abc'

            users.append(user)

        db.session.add_all(users)

        print("Creating exercises...")
        exercises = []
        for i in range(20):
            #instructions = fake.paragraph(nb_sentences=8)
            
            # recipe = Exercise(
            #     title=fake.sentence(),
            #     instructions=instructions,
            #     minutes_to_complete=randint(15,90),
            # )

            exercise = Exercise(
                 name=fake.first_name(), 
                 muscle_group=fake.first_name(),
                 difficulty_level=randint(0,9),
                 image_url="1"
            )
            #exercise.user = rc(users)

            exercises.append(exercise)

        db.session.add_all(exercises)



        print("Creating routines...")
        routines = []
        for i in range(20):
            routine = RoutineItem(
                initial_weight=randint(15,90),
                current_weight=randint(15,90),
                initial_reps=randint(15,90),
                current_reps=randint(15,90),
                initial_sets=randint(15,90),
                current_sets=randint(15,90),
                priority=randint(0,10),
                day_of_the_week=randint(0,7),
            )
            routine.user = rc(users)
            routine.exercise = rc(exercises)

            routines.append(routine)

        db.session.add_all(routines)
        

        db.session.commit()
        print("Complete.")
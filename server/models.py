from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db


## minimal testing setup for RoutineItem model
class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    routines = db.relationship('RoutineItem', back_populates="users")

## minimal testing setup for RoutineItem model
class Exercise(db.Model, SerializerMixin):
    __tablename__ = "exercises"
    id = db.Column(db.Integer, primary_key=True)
    routines = db.relationship('RoutineItem', back_populates="exercises")

class RoutineItem(db.Model, SerializerMixin):
    __tablename__ = "routine_items"

    id = db.Column(db.Integer, primary_key=True, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=False)
    initial_weight = db.Column(db.Integer)
    current_weight = db.Column(db.Integer)
    initial_reps = db.Column(db.Integer)
    current_reps = db.Column(db.Integer)
    initial_sets = db.Column(db.Integer)
    current_sets = db.Column(db.Integer)
    priority = db.Column(db.Integer)
    day_of_the_week = db.Column(db.String)

    users = db.relationship('User', back_populates="routines")
    exercises = db.relationship('Exercise', back_populates="routines")

    serialize_rules = ('-users.routine','-exercises.routine')

    @validates('user_id','exercise_id')
    def validate_fks(self, key, value):
        if not value:
            raise ValueError(f'ForeignKey {key} must be set')
        return value
    
    #@validates('priority','day_of_the_week')

    @validates('inital_weight','initial_reps','initial_sets')
    def validate_initial(self, key, value):
        if not value:
            raise ValueError(f'To reach your fitness goal, your regimen must be properly entered. {key} is missing.')
        return value
    
    @validates('current_weight','current_reps','current_sets')
    def validate_current(self, key, value):
        if not value:
            raise ValueError(f'Way to go! But {key} is missing.')
        return value
    
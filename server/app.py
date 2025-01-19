#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, abort, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import RoutineItem
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


class RoutineItems(Resource):
    ## TODO: add validation. either with @before_request or to each method
        
    def get(self):
        routine = [routine.to_dict() for routine in RoutineItem.query.all()]
        return make_response(routine, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_record = RoutineItem(
                user_id = data['user_id'],
                exercise_id = data['exercise_id'],
                initial_weight = data['initial_weight'],
                current_weight = 1,
                initial_reps = data['initial_reps'],
                current_reps = 1,
                initial_sets = data['initial_sets'],
                current_sets = 1,
                priority = data['priority'],
                day_of_the_week = data['day_of_the_week']
            )
        except ValueError as e:
            abort(422, e.args[0])
        
        db.session.add(new_record)
        db.session.commit()
        return make_response(new_record.to_dict(), 201)
    
api.add_resource(RoutineItems, '/routines')

class RoutineItemByID(Resource):
    ## TODO: add validation. either with @before_request or to each method
    
    @classmethod
    def find_model_by_id(cls, id):
        return RoutineItem.query.get_or_404(id)
    
    def get(self, id):
        model = self.__class__.find_model_by_id(id)
        return make_response(model.to_dict(), 200)
    
    def patch(self, id):
        model = self.__class__.find_model_by_id(id)
        data = request.get_json()
        try:
            for attr,value in data.items():
                setattr(model, attr, value)
        except ValueError as e:
            return make_response({"error": e.args}, 422)
        db.session.commit()
        return make_response(model.to_dict(), 202)
    
    def delete(self, id):
        model = self.__class__.find_model_by_id(id)
        db.session.delete(model)
        db.session.commit()
        return make_response("", 204)
    
api.add_resource(RoutineItemByID, '/routines/<int:id>')





if __name__ == '__main__':
    app.run(port=5555, debug=True)


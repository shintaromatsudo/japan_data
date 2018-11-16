#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import json
import psycopg2
import psycopg2.extensions
psycopg2.extensions.register_type(psycopg2.extensions.UNICODE)
psycopg2.extensions.register_type(psycopg2.extensions.UNICODEARRAY)

from flask import Flask  # Import class Flask from module flask
from flask_cors import CORS, cross_origin  #Import flask-cors to accept access to the data
app = Flask(__name__)    # Construct an instance of Flask class
CORS(app)                # apply CORS

@app.route('/')   # Register index() as route handler for root URL '/'
def index():
   """Route handler (or View Function) for root URL '/'"""
   return 'Hello, you have reached the default route for the python endpoint'

@app.route('/p')
def population():
    con = None
    js_string = ''

    try:
        con = psycopg2.connect(database='avinton', user='postgres')
        cur = con.cursor()
        sql = "SELECT jsonb_pretty(to_jsonb(array_agg(json_build_object('mw',mw,'prefecture',prefecture,'total',total,'0-4',_04,'5-9',_59,'10-14',_1014,'15-19',_1519,'20-24',_2024,'25-29',_2529,'30-34',_3034,'35-39',_3539,'40-44',_4044,'45-49',_4549,'50-54',_5054,'55-59',_5459,'60-64',_6064,'65-69',_6569,'0-4',_7074,'75-79',_7579,'80-84',_8084,'85-',_85))))FROM p;"
        cur.execute(sql)
        js_string = str(cur.fetchone()[0])

    except psycopg2.DatabaseError:
        print ('DB Error %s' % e)
        sys.exit(1)

    finally:
        if con:
        	con.close()

    return js_string

@app.route('/test')
def test():
    return 'test'

if __name__ == '__main__':  # Script executed directly?
   app.run()  # Launch built-in web server and run this Flask webapp

from flask import Flask, render_template, redirect, request, send_from_directory
import mysql.connector
import os
from werkzeug.security import check_password_hash, generate_password_hash
 


app = Flask(__name__)

@app.route("/")
def login_route():
    return redirect("/login")
    

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    username = request.form.get("username")
    password = request.form.get("password")

    if not username or not password:
        return "Password is required"

    try:
        db = mysql.connector.connect(
            host=os.getenv('DB_HOST', '127.0.0.1'),
            user=os.getenv('DB_USER', 'username'),
            password=os.getenv('DB_PASSWORD', 'password'),
            database=os.getenv('DB_NAME', 'loginDB'),
        )
    except mysql.connector.Error:
        return 'Database connection failed', 503

    cursor = db.cursor()
    try:
        cursor.execute(
            'SELECT password_hash FROM users WHERE username = %s',
            (username,),
        )
        user = cursor.fetchone()
    finally:
        cursor.close()
        db.close()

    if user and check_password_hash(user[0], password):
        return redirect("/homepage")

    return "Invalid username or password", 401

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "GET":
        return render_template("signup.html")

    username = request.form.get("username", "").strip
    password = request.form.get("password", "")

    if not username or not password:
            return "Password is required"
    
    try:
        db = mysql.connector.connect(
            host=os.getenv('DB_HOST', '127.0.0.1'),
            user=os.getenv('DB_USER', 'username'),
            password=os.getenv('DB_PASSWORD', 'password'),
            database=os.getenv('DB_NAME', 'loginDB'),
        )
    except mysql.connector.Error:
        return 'Database connection failed', 503
    
    cursor = db.cursor()
    try:
        #Defineing user/pass
        username = request.form.get("username", "").strip
        password = request.form.get("password")
        #Now we check the database and see if we can use a query to find our username in the DB, remember our only way to
        #communicate with the database is with the cursor, so we try to select the username we got from the database
        #we then check with an IF statement that cursor is either empty or equal to our username, if it is empty it means
        #we couldnt find the username and it isnt taken, if not the opposite applys

        if not username or not password:
            return "password is required"

        cursor.execute(
                    'SELECT 1 FROM users WHERE username = %s',
                    (username,),
                )
        
        if cursor.fetchone() is not None:
            return "username already exists", 404
        
        
       
        #Now we use cursor.execute to insert our new username and password into our database [ENSURE YOU USE CREATE_HAS FOR THE PASSWORD DO NOT GIVE THE RAW TEXT IN]

        cursor.execute(
            'INSERT INTO users (username, password_hash) VALUES (%s %s)',
            (username, generate_password_hash(password))
        )

        #Commit your database after that
        db.commit()
    finally:
        cursor.close()
        db.close()
    
    #Then after they have signed up you can choose to redirect the user to a login page or straight to your homepage
    return redirect("/login")


@app.route("/homepage")
def homepage():
    return redirect("/login")


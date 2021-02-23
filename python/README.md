## Steps to follow to started with python

1. Install python. At the time of writing this, the latest version of Python is 3.9.1 - [Download Python](https://www.python.org/downloads/)

2. Create your working folder

3. Open VSCode to youe chosen working folder.
4. Create virtual environment folder.
   ```sh
   python -m venv venv
   ```
5. Create your main python script file, eg. `main.py` or `script.py`.
6. Open the python script if it isn't already open.
7. Open VSCode's built in terminal. If the Python extension is installed, the virtual environment should activate itself.

   If the virtual environment doesnt activate automatically:

   - In Windows
     ```powershell
     & .\venv\Scripts\Activate.ps1
     ```
   - Lunix and MacOS
     ```sh
     source ./venv/bin/activate
     ```

8. Now you can install your dependenices with pip (Flask-SQLAlchemy, etc):
   ```shell
   pip install -r requirements.txt
   ```

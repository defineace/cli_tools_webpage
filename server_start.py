import threading
import os

class server:
    def __init__(self):
        try:
            thread_server_database = threading.Thread( target=self.server_database, args=())
            thread_server_react = threading.Thread( target=self.server_react, args=())

            thread_server_database.start()
            thread_server_react.start()

            thread_server_database.join()
            thread_server_react.join()
        
            print('SERVER_MAIN::INITIATED')
        except:
            print("SERVER_MAIN::FAILED_TO_START")

    def server_database(self):
        try:
            os.system('npx json-server --watch ./data/db_windows.json --port 8080')
            print("SERVER_DATABASE::INITIATED")
        except:
            print("SERVER_DATABASE::FAILED_TO_START")

    def server_react(self):
        try: 
            os.system('npm run start')
            print("SERVER_REACT::INITIATED")
        except:
            print("SERVER_REACT::FAILED_TO_START")


server = server()


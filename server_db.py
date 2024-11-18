import os
print("\nDatabase Server: Starting\n")

os.system("npx json-server --watch ./data/db_windows.json --port 8000")

print("\n-------------------------------------------------------------------\n")
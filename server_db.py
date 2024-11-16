import os
print("\nDatabase Server: Starting\n")

os.system("npx json-server --watch ./data/db.json --port 8000")

print("\n-------------------------------------------------------------------\n")
from contextlib import ExitStack
from subprocess import Popen


def kill(process):
    if process.poll() is None:  # still running
        process.kill()

with ExitStack() as stack:  # to clean up properly in case of exceptions
    processes = []
    for program in ['server_db', 'server_web']:
        processes.append(stack.enter_context(Popen(program)))  # start program
        stack.callback(kill, processes[-1])
        
    for process in processes:
        process.wait()
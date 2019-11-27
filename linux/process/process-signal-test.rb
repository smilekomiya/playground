#!/usr/bin/ruby

fork {
    puts "child process id is #{Process.pid}"
    sleep
}

puts "parent process id is #{Process.pid}"
sleep

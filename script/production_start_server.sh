#!/bin/bash

set -x

thin -p 3230 -e production --servers 3 stop
thin -d -p 3230 -e production --tag "Bigrooster Production" --servers 3 start

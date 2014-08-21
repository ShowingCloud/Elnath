#!/bin/bash

set -x

thin stop
thin -d -p 3130 --tag "Bigrooster Testing" start

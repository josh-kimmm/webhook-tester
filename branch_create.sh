#!/bin/bash

for i in {6..50}
do
	$(git checkout -b branch$i)
	$(git push --set-upstream origin branch$i)
done

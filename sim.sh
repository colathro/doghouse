#!/bin/bash
declare -a simulators=("8FEA351F-9BC8-4280-B00C-2E6F88C770EA" "C6855105-B377-4B47-844C-34DAC4E2308C" "E4C3BD48-00AD-4F5C-A7E0-CB340DC30674")

for i in "${simulators[@]}"
do
    xcrun instruments -w $i
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.17.4.tar.app
    xcrun simctl openurl $i exp://127.0.0.1:19001    
done
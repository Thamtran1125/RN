#!/bin/bash

FIRST_ARGUMENT="$1"

if [ "$FIRST_ARGUMENT" = "resolve-libs" ] ; then
  # resolve react-native-facebook-login
  \cp -r resolve-libs/react-native-maps/lib/android/build.gradle node_modules/react-native-maps/lib/android/build.gradle
fi

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import flagSlice from './flagSlice'
import flagsEuSlice from './FlagsLearnSlices/flagsEuSlice'
import flagsAmericaSlice from './FlagsLearnSlices/flagsAmericaSlice'
import flagsAfricaSlice from './FlagsLearnSlices/flagsAfricaSlice'
import flagsAsiaSlice from './FlagsLearnSlices/flagsAsiaSlice'
import flagsOceaniaSlice from './FlagsLearnSlices/flagsOceaniaSlice'
import Quiz1Slice from './FlagsQuizSlices/Quiz1Slice'
import Quiz2Slice from './FlagsQuizSlices/Quiz2Slice'
import Quiz3Slice from './FlagsQuizSlices/Quiz3Slice'
import Quiz4Slice from './FlagsQuizSlices/Quiz4Slice'
import Quiz5Slice from './FlagsQuizSlices/Quiz5Slice'
import Quiz6Slice from './FlagsQuizSlices/Quiz6Slice'
import Quiz7Slice from './FlagsQuizSlices/Quiz7Slice'
import Quiz8Slice from './FlagsQuizSlices/Quiz8Slice'
import Quiz9Slice from './FlagsQuizSlices/Quiz9Slice'
import Quiz10Slice from './FlagsQuizSlices/Quiz10Slice'

export const store = configureStore({
    reducer: {
        flags: flagSlice,
        flagsEu: flagsEuSlice,
        flagsAmerica: flagsAmericaSlice,
        flagsAfrica: flagsAfricaSlice,
        flagsAsia: flagsAsiaSlice,
        flagsOceania: flagsOceaniaSlice,
        quiz1Flags: Quiz1Slice,
        quiz2Flags: Quiz2Slice,
        quiz3Flags: Quiz3Slice,
        quiz4Flags: Quiz4Slice,
        quiz5Flags: Quiz5Slice,
        quiz6Flags: Quiz6Slice,
        quiz7Flags: Quiz7Slice,
        quiz8Flags: Quiz8Slice,
        quiz9Flags: Quiz9Slice,
        quiz10Flags: Quiz10Slice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
import { DateRenderer, DateTimeRenderer, WeekRenderer } from '@khatastroffik/react-text-renderer-components';
import React from "react";
import UseCase from './UseCase';


export default function Demo() {
    const DTFormatOption1: Intl.DateTimeFormatOptions = { timeZone: 'Australia/Sydney', dateStyle: 'full', timeStyle: 'short', hour12: true }
    const DTFormatOption2: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Berlin', dateStyle: 'full', timeStyle: 'full' }
    const testDateString1 = "2024-10-06T19:40:55.221Z";
    const testDate1 = new Date(testDateString1);
    const testDateString2 = "2025-12-29T19:40:55.221Z";
    const testDate2 = new Date(testDateString2);
    return <>
        <div className='demo'>
            <h2>DateRenderer</h2>
            <UseCase value={"new Date()"} attributes={'TimeZone = (client system), Locale = (client system)'}>
                <DateRenderer value={new Date()} />
            </UseCase>
            <UseCase value={testDateString1} attributes={'TimeZone = (client system), Locale = (client system)'}>
                <DateRenderer value={testDate1} />
            </UseCase>
            <UseCase value={testDateString1} attributes={'TimeZone = (client system), Locale = "en-EN"'}>
                <DateRenderer value={testDate1} locale={"en-EN"} />
            </UseCase>
            <UseCase value={testDateString1} attributes={'TimeZone = "Etc/GMT-8", Locale = (client system)'}>
                <DateRenderer value={testDate1} timeZone="Etc/GMT-8" />
            </UseCase>
        </div>

        <div className='demo'>
            <h2>DateTimeRenderer</h2>
            <UseCase value={"new Date()"} attributes={'TimeZone = (client system), Locale = (client system), dateStyle = (default), timeStyle = (default)'}>
                <DateTimeRenderer value={new Date()} />
            </UseCase>
            <UseCase value={testDateString1} attributes={'TimeZone = (client system), Locale = "en-EN", dateStyle = (default), timeStyle = (default)'}>
                <DateTimeRenderer value={testDate1} locale={"en-EN"} />
            </UseCase>
            <UseCase value={testDateString1} attributes={'TimeZone = "Australia/Sydney", Locale = (client system), dateStyle = "full", timeStyle = "short"'}>
                <DateTimeRenderer value={testDate1} formatOptions={DTFormatOption1} pure />
            </UseCase>
            <UseCase value={testDateString1} attributes={'TimeZone = "Europe/Berlin", Locale = "en-EN", dateStyle = "full", timeStyle = "full"'}>
                <DateTimeRenderer value={testDate1} locale={"en-EN"} formatOptions={DTFormatOption2} />
            </UseCase>
        </div>
        <div className='demo'>
            <h2>WeekRenderer</h2>
            <UseCase value={"new Date()"} attributes={'displayYear = true'}>
                CW <WeekRenderer value={new Date()} displayYear />
            </UseCase>
            <UseCase value={testDateString1} attributes={'displayYear = false (default)'}>
                CW <WeekRenderer value={testDate1} />
            </UseCase>
            <UseCase value={testDateString2} attributes={'displayYear = true'}>
                CW <WeekRenderer value={testDate2} displayYear />
            </UseCase>
        </div>
    </>;
}

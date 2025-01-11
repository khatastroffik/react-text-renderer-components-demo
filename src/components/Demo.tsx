import { DateRenderer, DateTimeRenderer, WeekRenderer } from '@khatastroffik/react-text-renderer-components';
import React from "react";


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
            <div className='usecase'>
                <span>TimeZone = (client system), Locale = (client system)</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;<DateRenderer value={testDate1} locale={"de-DE"} />
            </div>
            <div className='usecase'>
                <span>TimeZone = (client system), Locale = "en-EN"</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;<DateRenderer value={testDate1} locale={"en-EN"} />
            </div>
            <div className='usecase'>
                <span>TimeZone = "Etc/GMT-8", Locale = (client system)</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;<DateRenderer value={testDate1} timeZone="Etc/GMT-8" />
            </div>
        </div>

        <div className='demo'>
            <h2>DateTimeRenderer</h2>
            <div className='usecase'>
                <span>TimeZone = (client system), Locale = (client system), dateStyle = (default), timeStyle = (default)</span><br />
                <span className='uc'>value = &#123; new Date() &#125;</span>&nbsp;&rarr;&nbsp;<DateTimeRenderer value={new Date()} />
            </div>
            <div className='usecase'>
                <span>TimeZone = (client system), Locale = "en-EN", dateStyle = (default), timeStyle = (default)</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;<DateTimeRenderer value={testDate1} locale={"en-EN"} />
            </div>
            <div className='usecase'>
                <span>TimeZone = "Australia/Sydney", Locale = (client system), dateStyle = 'full', timeStyle = 'short'</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;<DateTimeRenderer value={testDate1} formatOptions={DTFormatOption1} pure />
            </div>
            <div className='usecase'>
                <span>TimeZone = "Europe/Berlin", Locale = "en-EN", dateStyle = 'full', timeStyle = 'full'</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;<DateTimeRenderer value={testDate1} locale={"en-EN"} formatOptions={DTFormatOption2} />
            </div>
        </div>
        <div className='demo'>
            <h2>WeekRenderer</h2>
            <div className='usecase'>
                <span>displayYear = false (default)</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString1}") &#125;</span>&nbsp;&rarr;&nbsp;CW <WeekRenderer value={testDate1} />
            </div>

            <div className='usecase'>
                <span>displayYear = true</span><br />
                <span className='uc'>value = &#123; new Date("{testDateString2}") &#125;</span>&nbsp;&rarr;&nbsp;CW <WeekRenderer value={testDate2} displayYear />
            </div>
        </div>
    </>;
}

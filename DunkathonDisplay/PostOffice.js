/*
    Copyright 2022 Drew Banyai

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

const PostOffice = {
    makeRequest: async (options, recvJSON = true, sendJSON = true, forceResponse = false) => {
        //  Create the headers which will be applied to the fetch call
        let headers = { };
        if (sendJSON) {
            Object.assign(headers, {
                'Accept': 'application/json',
                'Content-Type': options.contentType ? options.contentType : 'application/json',
                'Access-Control-Request-Method': "OPTIONS, GET"
            })
        };

        //  Create the full fetch options
        const fetchOptions = {
            method: options.method ? options.method : "POST",
            headers: headers,
            body: options.body ? options.body : null,
        };

        //  Make the fetch call and save off the response
        let response = null
        try { response = await fetch(options.endpoint, fetchOptions); }
        catch (error) { console.warn("Failed to contact the server. Please try again later or contact the administrator."); return null; }
        if (response.ok || forceResponse) { return (recvJSON ? (await response.json()) : (await response)); }
        return null;
    },

    MakeFormBody: (jsonObject) => {
        let formEntries = [];
        let objKeys = Object.keys(jsonObject);
        objKeys.forEach(key => formEntries.push(key + "=" + jsonObject[key]));
        let formBody = formEntries.join("&");
        return formBody;
    },

    //  API CALLS

    TriggerDunk: async () => {
        let result = await PostOffice.makeRequest({
            endpoint: SETTINGS.MICROSERVICE_URL + "Dunk",
            method: "GET"
        })
        return result
    },
}
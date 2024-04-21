import React from 'react';

function TenantForm({ tenant }) {
    return (
        <form>
            <label> Ref:
                <input type="text" id="ref" placeholder="e.g. 123John"/>
            </label>
            <label> Property Address:
                <input type="text" id="address" placeholder="e.g. 123 StreetName Street Suburb NSW 1111"/>
            </label>
            <label> First Name:
                <input type="text" id="fname" placeholder="e.g. John" />
            </label>
            <label> Last Name:
                <input type="text" id="fname" placeholder="e.g. John" />
            </label>
            <label> Mobile:
                <input type="tel" id="mobile" pattern="04[0-9]{8}" placeholder="e.g. 0400111000" />
            </label>
            <label> Email:
                <input type="email" id="email" placeholder="e.g. hi@example.com" />
            </label>
            <label> Lease Term (months):
                <input type="text" id="term" placeholder="e.g. 12" />
            </label>
            <label> Lease Start Date:
                <input type="date" id="sdate" name="sdate" />
            </label>
            <label> Lease End Date:
                <input type="date" id="edate" name="edate" />
            </label>
            <button id="submit">Save</button>
        </form>
    )
}

export default TenantForm;
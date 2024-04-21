import React from 'react';

function TenantForm({ tenant }) {
    return (
        <form>
            <label> Ref:
                <input type="text" id="ref" name="ref" />
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
            <button id="submit">Save</button>
        </form>
    )
}

export default TenantForm;
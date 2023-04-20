import React from 'react'
import "./education.css"

const Education = () => {
    return (
        <div className='edustyle'>
            <h2>Education</h2>
            <table className='tab'>
                <tr>
                    <th>Stream</th>
                    <th>University/college </th>
                    <th> PassOut</th>
                    <th> Percentage</th>
                </tr>
                <tr>
                    <td>MCA</td>
                    <td>Pune University</td>
                    <td>2022</td>
                    <td>84.96</td>
                </tr>
                <tr>
                    <td>BSC.IT</td>
                    <td>Mumbai University </td>
                    <td>2020</td>
                    <td>74.86</td>
                </tr>
            </table>
        </div>
    )
}

export default Education
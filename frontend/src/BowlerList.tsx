import { useEffect, useState } from "react";
import {bowler} from "./types/bowler"


function BowlerList () {

    const [bowlers, setBowlers] = useState<bowler[]>([]);
    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/Bowlers');
            const data = await response.json();
            setBowlers(data);
        };
        fetchBowler()
    }, []);
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bowlers.map((b) => (
                            <tr key={b.bowlerId}>
                                <td>{b.bowlerFirstName}</td>
                                <td>{b.bowlerMiddleInit}</td>
                                <td>{b.bowlerLastName}</td>
                                <td>{b.team?.teamName}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        
        
        
        
        </>

    );
}

export default BowlerList
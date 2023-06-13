import styled from "styled-components";

// Define the styles for the spinner
export const Spinner = styled.div`
    border: 5px solid var(--lightGrey);       // Border color of the spinner
    border-top: 5px solid var(--medGrey);     // Top border color of the spinner
    border-radius: 50%;                       // Border radius to create a circular shape
    width: 50px;                              // Width of the spinner
    height: 50px;                             // Height of the spinner
    animation: spin 0.8s linear infinite;      // Animation properties for rotation
    margin: 20px auto;                         // Margin to center the spinner

    @keyframes spin {
        0% {
            transform: rotate(0deg);           // Initial rotation angle
        } 
        100% {
            transform: rotate(360deg);         // Final rotation angle (complete rotation)
        }
    }
`;

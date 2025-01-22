  // Function to format the current date and time in the desired filename format
  // Example: "image-2025-01-22-14.55.36"
  const formatDateForFilename = () => {
    const now = new Date(); // Get the current date and time

    // Extract year, month, day, hours, minutes, and seconds from the current date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Add leading zero to month
    const day = String(now.getDate()).padStart(2, '0'); // Add leading zero to day
    const hours = String(now.getHours()).padStart(2, '0'); // Add leading zero to hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Add leading zero to minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Add leading zero to seconds

    // Return the formatted date string in the desired format
    return `image-${year}-${month}-${day}-${hours}.${minutes}.${seconds}`;
  };

  export default formatDateForFilename;
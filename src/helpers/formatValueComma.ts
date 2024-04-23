export const formatValue = (value: string | number) => {
    if (typeof value === 'string') {
      // Remove thousands separators before parsing the number
      const parsedValue = parseFloat(value.replace(/,/g, ''));
      if (!isNaN(parsedValue)) {
        // Format the parsed value with thousands separators
        return parsedValue.toLocaleString();
      }
    }
    return value;
  };
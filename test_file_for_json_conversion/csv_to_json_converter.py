import csv
import json

def csv_to_json(csv_file, json_file, root_key="3"):
    """
    Converts a CSV file into a JSON file with a list of dictionaries
    under a single root key.

    - Column headers are preserved exactly as they appear.
    - Numeric strings are converted into floats (when possible).
    - Empty values are dropped (they won't appear in the JSON).
    """

    def convert_value(value):
        """Attempt to convert string values to floats, leave as string otherwise."""
        if value.strip() == "":
            return None  # treat empty cells as missing
        try:
            # Try to cast to float
            return float(value)
        except ValueError:
            return value  # keep original if not numeric

    data_list = []
    with open(csv_file, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Convert each value in the row
            converted_row = {}
            for key, val in row.items():
                # converted = convert_value(val)
                converted = val  # Keep as string to preserve current behavior
                if converted is not None:  # skip empty cells
                    converted_row[key] = converted
            data_list.append(converted_row)

    # Wrap in dictionary under the chosen root key
    output_data = {root_key: data_list}

    # Write out to JSON with pretty formatting
    with open(json_file, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=6)

    print(f"✅ JSON saved to {json_file}")

# Example usage
csv_to_json("Constellation - Demo Data for first graphic - move time.csv", "../src/components/average-move-time/new_output.json", root_key="3")

#!/bin/bash

# Base directory containing the subdirectories with MP4 files
base_dir="assets"

# Get current directory and print it
current_dir=$(pwd)
echo "Current directory: $current_dir"

# Loop through all matching subdirectories
for input_folder in "$base_dir"/*/assets; do
    echo "Entering directory: $input_folder"

    # Check if the directory exists and is not empty
    if [ -d "$input_folder" ] && [ "$(ls -A "$input_folder")" ]; then
        # Count the number of MP4 files in the current subdirectory
        num_videos=$(ls -1 "$input_folder"/*.mp4 2>/dev/null | wc -l)

        # Determine the resolution based on the number of video files
        if [ "$num_videos" -gt 1 ]; then
            resolution="480"
        else
            resolution="720"
        fi

        # Loop through all MP4 files in the current subdirectory
        for video_file in "$input_folder"/*.mp4; do
            filename=$(basename "$video_file")
            echo "Processing video: $filename at ${resolution}p"

            # Remove audio and reduce quality to determined resolution
            ffmpeg -i "$video_file" -an -vf "scale=-2:$resolution" -c:v libx264 -preset fast -crf 28 "${video_file%.mp4}_${resolution}p.mp4"

            # Remove the original video
            rm "$video_file"

            # Rename the processed video to the original file name
            mv "${video_file%.mp4}_${resolution}p.mp4" "$video_file"

            # Check if FFmpeg process was successful
            if [ $? -eq 0 ]; then
                echo "Processed $filename successfully."
            else
                echo "Failed to process $filename."
            fi
        done
    else
        echo "No video files found in $input_folder"
    fi
done

echo "All matching directories processed."

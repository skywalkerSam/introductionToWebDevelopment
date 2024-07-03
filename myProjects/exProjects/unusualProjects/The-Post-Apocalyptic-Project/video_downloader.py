"""
Developer: @skywalkerSam
Purpose: To download youtube videos...
Date: 12022.09.23.16:03:00
"""

from logging import exception   # Google Authentication
import moviepy.editor as mpe
import os
import pytube as pt
import pyfiglet as pf


def intro():
    title = pf.figlet_format("YouTube  Bot", "doom")
    print(title)


video_url = "https://www.youtube.com/watch?v=ApXoWvfEYVU"
# For age restricted content: use_oauth=True, allow_oauth_cache=True
yt = pt.YouTube(video_url)


def download_video():
    video_file = "motion_picture.mp4"
    audio_file = "motion_picture_audio.mp3"

    video_src = pt.YouTube(video_url).streams.filter(
        subtype='mp4', res="1080p").first().download()
    os.rename(video_src, video_file)
    audio_src = pt.YouTube(video_url).streams.filter(
        only_audio=True).first().download()
    os.rename(audio_src, audio_file)

    video_src = mpe.VideoFileClip(video_file)
    audio_src = mpe.AudioFileClip(audio_file)
    output = video_src.set_audio(audio_src)
    output.write_videofile("Video.mp4")
    os.remove(video_file)
    os.remove(audio_file)


if __name__ == "__main__":
    intro()
    print("Please wait, It might take a while...".upper())
    print(f"\n\t Downloading:   \"{yt.title}\" \n")
    try:
        download_video()
    except KeyboardInterrupt:
        print("\n\n\t\t\t Operation cancelled by the user ;( \n".upper())
    except exception as e:
        # print(e)
        print("\n\t Something Went Wrong! Please Try Again :( \n".upper())

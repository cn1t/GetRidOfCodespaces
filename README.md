# GetRidOfCodespaces
## **#SayNoToCodespaces**
Changes the default branch selection on GitHub from 'Codespaces' to 'Checkout Locally'.<br>
<img src="https://github.com/Niteletsplay/GetRidOfCodespaces/assets/67828948/b25ded12-a25e-44c4-9b27-10ce7db88616" width="300">

Also it changes the default for the "Download Code" button to "Local".<br>
<img src="https://github.com/Niteletsplay/GetRidOfCodespaces/assets/67828948/8b2d572f-9540-4428-9e34-c630deb8f019" width="300">

Therefore, you can avoid accidently pressing the wrong button. (Happened to me very often)

I slapped this together in like 10min and its my first chrome extension, so its nothing crazy.

## Build from source on linux for **Firefox**
```sh
git clone github.com/Niteletsplay/GetRidOfCodespaces
cd GetRidOfCodespaces
zip -0 -r GetRidOfCodespaces.xpi * -x GetRidOfCodespaces.xpi
```

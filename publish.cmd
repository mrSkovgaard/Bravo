@ECHO OFF
SETLOCAL

SET arch=x64
SET runtime=win-%arch%
SET configuration=Release
SET verbosity=Minimal
SET publishfolder=%~dp0\src\Sqlbi.Bravo\bin\%configuration%\net5.0-windows\%runtime%\publish

CD /D "%~dp0"
dotnet publish .\src\Sqlbi.Bravo\Sqlbi.Bravo.csproj --configuration %configuration% --runtime %runtime% --self-contained true -p:PublishSingleFile=true -p:PublishReadyToRun=true --verbosity %verbosity% --force --nologo

CD /D "%~dp0\installer"
IF EXIST *.msi    DEL *.msi
IF EXIST *.wixobj DEL *.wixobj
IF EXIST *.wixpdb DEL *.wixpdb
.\wix\311\heat.exe dir "%publishfolder%" -gg -scom -srd -sreg -sfrag -templatefragment -cg AppComponentsAutogenerated -dr INSTALLFOLDER -var var.PublishFolder -t Transform.xslt -out Components.wxs -nologo
.\wix\311\candle.exe Components.wxs -dPublishFolder="%publishfolder%" -arch "%arch%" -nologo
.\wix\311\candle.exe Product.wxs -arch "%arch%" -dPublishFolder="%publishfolder%" -nologo
.\wix\311\light.exe Product.wixobj Components.wixobj -ext WixUIExtension -ext WixUtilExtension.dll -cultures:en-us -loc Product_en-us.wxl -out "Bravo-%arch%-en-us.msi" -nologo

EXIT /b %ERRORLEVEL%
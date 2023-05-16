# iooa-2023-turisticke
Preduvjet je instalirati Visual Studio Code. Navedeni program se preuzme s linka https://code.visualstudio.com/download i potom instalira lokalno na računalo. Instalirati Git (https://git-scm.com/download/win) lokalno na računalo.

1. Na računalu se kreira mapa koju potom otvaramo pomoću Visual Studio Code-a (File - Open folder - odabir kreirane mape).
2. U izborniku odabrati "Terminal" -> "New terminal"
3. Na stranici Github-a otvoriti projekt (https://github.com/vdavid033/iooa-2023-turisticke), otvoriti "<> Code" i kopirati link (https://github.com/vdavid033/iooa-2023-turisticke.git)
4. U Visual Studio Code-u u terminalu pozvati naredbu "git clone https://github.com/vdavid033/iooa-2023-turisticke.git" i pričekati da se klonira
5. U terminalu, pomoću naredbe "cd .\iooa-2023-turisticke\" prebaciti se git direktorij
6. Prebaciti se na granu "merge-sve" pomoću naredbe u terminalu "git checkout merge-sve"
7. Paralelno s otvorenim terminalom, otvoriti novi terminal u kojem ćemo pozvati naredbu cd .\iooa-2023-turisticke\backend\ i kada se prebacimo na backend pozvati naredbu "node index.js"
8. U prvom otvorenom terminalu pozvati naredbu "cd .\turisticke\" i potom naredbu "npm install"
9. Po završetku instalacije pozivamo naredbu "quasar dev" i aplikacija se pokreće


 
 

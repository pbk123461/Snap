/*

  lang-de.js

  German translation for SNAP!

  written by Jens Mönig

  Copyright (C) 2012 by Jens Mönig

  This file is part of Snap!.

  Snap! is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of
  the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.fr = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    À      \u00C0
    à      \u00E0
    É      \u00C9
    è      \u00E8
    é      \u00E9
    ê      \u00EA
    ç      \u00E7
    ï      \u00EF
    ô      \u00F4
    ù      \u00F9
    °      \u00B0
    '      \u0027
    «      \u00AB
    »      \u00BB
    ↔      \u2194
    ↕      \u2195
*/

    // translations meta information
    'language_name':
        'Fran\u00E7ais', // the name as it should appear in the language menu
    'language_translator':
        'Jean-Jacques Valliet, Mark Rafter, Martin Quinson, Damien Caselli', // your name for the Translators tab
    'translator_e-mail':
        'i.scool@mac.com', // optional
    'last_changed':
        '2020-10-28', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'Sans Titre',
    'development mode':
        'mode d\u00E9veloppeur',

    // categories:
    'Motion':
        'Mouvement',
    'Looks':
        'Apparence',
    'Sound':
        'Sons',
    'Pen':
        'Stylo',
    'Control':
        'Contr\u00F4les',
    'Sensing':
        'Capteurs',
    'Operators':
        'Op\u00E9rateurs',
    'Variables':
        'Variables',
    'Lists':
        'Listes',
    'Other':
        'Autres',

    // editor:
    'draggable':
        'd\u00E9pla\u00E7able avec la souris',

    // tabs:
    'Scripts':
        'Scripts',
    'Costumes':
        'Costumes',
    'Sounds':
        'Sons',

   // names:
    'Sprite':
        'Lutin',
    'Stage':
        'Sc\u00E8ne',

    // rotation styles:
    'don\'t rotate':
        'le lutin ne pivote jamais',
    'can rotate':
        'le lutin pivote \nautour de son centre de rotation',
    'only face left/right':
        'le lutin reste en position horizontale \nsoit vers la gauche soit vers la droite ',

    // new sprite button:
    'add a new sprite':
        'ajouter un nouveau lutin',
    'add a new Turtle sprite':
        'ajouter un nouveau lutin Tortue',

    // tab help
    'costumes tab help':
        'Importer une image depuis votre ordinateur ou une page web \npar un presser-glisser-d\u00E9poser dans l\u0027aire des costumes',
    'import a sound from your computer\nby dragging it into here':
        'Importer un son depuis votre ordinateur \npar un presser-glisser-d\u00E9poser dans l\u0027aire des sons',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

     // motion:
    'Stage selected:\nno motion primitives':
        'Sc\u00E8ne s\u00E9lectionn\u00E9e :\naucune brique de d\u00E9pla\u00E7ement',

    'move %n steps':
        'avancer de %n pas',
    'turn %clockwise %n degrees':
        'tourner de %n degr\u00E9s %clockwise',
    'turn %counterclockwise %n degrees':
        'tourner de %n degr\u00E9s %counterclockwise',
    'point in direction %dir':
        'se diriger en faisant un angle de %dir',
    'point towards %dst':
        'se diriger vers %dst',
    'go to x: %n y: %n':
        'aller \u00E0 x: %n y: %n',
    'go to %dst':
        'aller \u00E0 %dst',
    'glide %n secs to x: %n y: %n':
        'glisser en %n sec. \u00E0 x: %n y: %n',
    'change x by %n':
        'ajouter %n \u00E0 x',
    'set x to %n':
        'donner la valeur %n \u00E0 x',
    'change y by %n':
        'ajouter %n \u00E0 y',
    'set y to %n':
        'donner la valeur %n \u00E0 y',
    'if on edge, bounce':
        'rebondir si le bord est atteint',
    'x position':
        'position x',
    'y position':
        'position y',
    'direction':
        'direction',

    // looks:
    'switch to costume %cst':
        'basculer sur le costume %cst',
    'next costume':
        'costume suivant',
    'costume #':
        'costume n\u00B0',
    'say %s for %n secs':
        'dire %s pendant %n sec.',
    'say %s':
        'dire %s',
    'think %s for %n secs':
        'penser %s pendant %n sec.',
    'think %s':
        'penser %s',
    'Hello!':
        'Salut !',
    'Hmm...':
        'Mmmh...',
    'change %eff effect by %n':
        'ajouter \u00E0 l\u0027effet %eff %n',
    'set %eff effect to %n':
        'mettre l\u0027effet %eff \u00E0 %n',
    'clear graphic effects':
        'annuler les effets graphiques',
    'change size by %n':
        'ajouter %n \u00E0 la taille',
    'set size to %n %':
        'choisir %n % de la taille initiale',
    'size':
        'taille',
    'show':
        'montrer',
    'hide':
        'cacher',
    'go to %layer layer':
        'aller à l\u0027 %layer plan',
    'front':
        'avant',
    'back':
        'arrière',
    'go back %n layers':
        'd\u00E9placer de %n plan arri\u00E8re',

    'development mode \ndebugging primitives:':
        'mode d\u00E9veloppement \ndebugging primitives:',
    'console log %mult%s':
        'console log %mult%s',
    'alert %mult%s':
        'Pop-up: %mult%s',

    // sound:
    'play sound %snd':
        'jouer le son %snd',
    'play sound %snd until done':
        'jouer le son %snd jusqu\u0027au bout',
    'stop all sounds':
        'arr\u00EAter tous les sons',
    'rest for %n beats':
        'faire une pause pour %n temps',
    'play note %note for %n beats':
        'jouer la note %note pour %n temps',
    'change tempo by %n':
        'ajouter %n au tempo',
    'set tempo to %n bpm':
        'choisir le tempo \u00E0 %n bpm',
    'tempo':
        'tempo',
    'set instrument to %inst':
        'mettre l\u0027instrument à %inst',
    
    // pen:
    'clear':
        'effacer tout',
    'pen down':
        'stylo en position d\u0027\u00E9criture',
    'pen up':
        'relever le stylo',
    'set pen color to %clr':
        'mettre la couleur %clr pour le stylo',
    'change pen color by %n':
        'ajouter %n \u00E0 la couleur du stylo',
    'set pen %clrdim to %n':
        'mettre la %clrdim du stylo à %n',
    'hue':
        'teinte',
    'transparency':
        'transparence',
    'change pen %clrdim by %n':
        'ajouter à la %clrdim du stylo %n',

    'change pen shade by %n':
        'ajouter %n \u00E0 l\u0027intensit\u00E9 du stylo ',
    'set pen shade to %n':
        'choisir l\u0027intensit\u00E9 %n pour le stylo',
    'change pen size by %n':
        'ajouter %n \u00E0 la taille du stylo ',
    'set pen size to %n':
        'mettre la taille du stylo à %n',
    'stamp':
        'estampiller',
    'fill':
        'remplir',

      // control:
    'when %greenflag clicked':
        'Quand %greenflag est press\u00E9',
    'when %keyHat key pressed %keyName':
        'Quand %keyHat est press\u00E9 %keyName',
    'when I am clicked':
        'Quand je suis press\u00E9 ',
  'when I am %interaction':
    'Quand je suis %interaction',
    'when I receive %msgHat %message':
        'Quand je re\u00E7ois %msgHat %message',
    'broadcast %msg %receive':
        'envoyer %msg %receive',
    'broadcast %msg %receive and wait':
        'envoyer %msg %receive et attendre',
    'to':
        '\u00E0',
    'Message name':
        'Nom du message',
    'wait %n secs':
        'attendre %n sec.',
    'wait until %b':
        'attendre jusqu\u0027\u00E0 %b',
    'forever %loop':
        'r\u00E9p\u00E9ter ind\u00E9finiment %loop',
    'repeat %n %loop':
        'r\u00E9p\u00E9ter %n fois %loop',
    'repeat until %b %loop':
        'r\u00E9p\u00E9ter jusqu\u0027\u00E0 %b %loop',
    'for %upvar = %n to %n %cla':
        'pour %upvar allant de %n à %n %cla',
    'if %b %c':
        'si %b %c',
    'if %b %c else %c':
        'si %b %c sinon %c',
    'if %b then %s else %s':
        'si %b alors %s sinon %s',
    'report %s':
        'rapporte %s',
    'stop block':
        'arr\u00EAter le bloc',
    'stop script':
        'arr\u00EAter le script',
    'stop %stopOthersChoices':
        'arr\u00EAter %stopOthersChoices',
    'stop %stopChoices':
        'arr\u00EAter %stopChoices',
    'stop all %stop':
        'arr\u00EAter tout %stop',
    'run %cmdRing %inputs':
        'ex\u00E9cute %cmdRing  %inputs',
    'launch %cmdRing %inputs':
        'lance %cmdRing %inputs',
    'call %repRing %inputs':
        'appelle %repRing %inputs',
    'tell %spr to %cmdRing %inputs':
        'dis à %spr de %cmdRing %inputs',
    'ask %spr for %repRing %inputs':
        'demande à %spr sa %repRing %inputs',
    'run %cmdRing w/continuation':
        'ex\u00E9cute %cmdRing avec continuation',
    'call %cmdRing w/continuation':
        'appelle %cmdRing avec continuation',
    'warp %c':
        'warp %c',
    'when I start as a clone':
        'Quand je commence comme clone',
    'create a clone of %cln':
        'créer un clone de %cln',
    'a new clone of %cln':
        'un nouveau clone de %cln',
    'myself':
        'moi-m\u00EAme',
    'delete this clone':
        'supprime ce clone',
    'pause all %pause':
        'mettre en pause %pause',
    'all but this script':
        'tout sauf ce script',
    'other scripts in sprite':
        'les autres scripts de ce lutin',
    'this script':
        'ce script',
    'this block':
        'ce bloc',
    'any message':
        'message quelconque',

     // sensing:
    'touching %col ?':
        '%col touch\u00E9 ?',
    'touching %clr ?':
        'couleur %clr touch\u00E9e ?',
    'color %clr is touching %clr ?':
        'couleur %clr touche %clr ?',
    'ask %s and wait':
        'demander %s et attendre',
    'what\'s your name?':
        'Quel est ton nom ?',
    'answer':
        'r\u00E9ponse',
    'mouse x':
        'souris x',
    'mouse y':
        'souris y',
    'mouse down?':
        'souris press\u00E9e ?',
    'key %key pressed?':
        'touche %key press\u00E9e ?',
    'distance to %dst':
        'distance de %dst',
    'reset timer':
        'r\u00E9initialiser le chronom\u00E8tre',
    'timer':
        'chronom\u00E8tre',
    '%att of %spr':
        '%att de %spr',
    'my %get':
        'attribut %get',
    'http:// %s':
        'http:// %s',
    'turbo mode?':
        'turbo mode activ\u00E9 ?',
    'set turbo mode to %b':
        'turbo mode prend la valeur %b',
    'filtered for %clr':
        'filtr\u00E9 pour %clr',
    'stack size':
        'taille de la pile',
    'frames':
        'cadres',
    '%rel to %dst':
        '%rel à %dst',
    'distance':
        'distance',
    '%asp at %loc' :
        '%asp sous %loc',
    'sprites' :
        'lutins',

    // attributes
    'neighbors':
        'voisins',
    'self':
        'moi-m\u00EAme',
    'other sprites':
        'autres lutins',
    'parts':
        'parts',
    'anchor':
        'ancre',
    'parent':
        'parent',
    'children':
        'enfants',
    'clones':
        'clones',
    'other clones':
        'autres clones',
    'dangling?':
        'pendiller?',
    'draggable?':
        'd\u00E9pla\u00E7able avec la souris?',
    'rotation style':
        'sens de rotation',
    'rotation x':
        'rotation x',
    'rotation y':
        'rotation y',
    'center x':
        'centre x',
    'center y':
        'centre y',
    'name':
        'nom',
    'stage':
        'scène',
    'costumes':
        'costumes',
    'sounds':
        'sons',
    'scripts':
        'scripts',

    // operators:
    '%n mod %n':
        '%n mod %n',
    'round %n':
        'arrondi de %n',
    '%fun of %n':
        '%fun appliqu\u00E9 \u00E0 %n',
    'pick random %n to %n':
        'nombre al\u00E9atoire entre %n et %n',
    'and':
        'et',
    'or':
        'ou',
    'not %b':
        'non %b',
    'true':
        'vrai',
    'false':
        'faux',
    'join %words':
        'regroupe %words',
    'split %s by %delim':
        'd\u00E9coupe %s entre les %delim',
    'hello':
        'Bonjour',
    'world':
        'Monde',
    'letter %ix of %s':
        'lettre %ix de %s',
    'length of %s':
        'longueur de %s',
    'unicode of %s':
        'valeur unicode de %s',
    'unicode %n as letter':
        'unicode %n comme lettre',
    'is %s a %typ ?':
        '%s est un(e) %typ ?',
    'is %all== ?':
        'est %all== ?',
    'identical to':
        'identique \u00E0',
    'all identical':
        'all identical',
    'all <':
        'all <',
    'all >':
        'all >',
    'all \u2264':
        'all \u2264',
    'all \u2265':
        'all \u2265',
    'all =':
        'all =',
    'neighbors \u2260':
        'neighbors \u2260',

    'type of %s':
        'type de %s',

     // variables:
    'Make a variable':
        'Nouvelle variable',
    'Variable name':
        'Nom de la variable',
    'Delete a variable':
        'Supprimer une variable',

    'set %var to %s':
        'mettre %var à %s',
    'change %var by %n':
        'ajouter \u00E0 %var %n',
    'show variable %var':
        'afficher la variable %var',
    'hide variable %var':
        'cacher la variable %var',
    'script variables %scriptVars':
        'variables du script %scriptVars',

    // lists:
    'list %exp':
        'liste %exp',
    'numbers from %n to %n':
        'nombres de %n à %n',
    '%s in front of %l':
        '%s au d\u00E9but de %l',
    'item %idx of %l':
        '\u00E9l\u00E9ment %idx de %l',
    'all but first of %l':
        'tous sauf le premier de %l',
    'length of %l':
        'longueur de %l',
    '%l contains %s':
        '%l contient %s',
    'thing':
        'qqchose',
    'is %l empty?':
        '%l vide?',
    'map %repRing over %l':
        'appliquer %repRing à %l',
    'keep items %predRing from %l':
        'garder les items tels que %predRing de %l',
    'combine %l using %repRing':
        'combine les items de %l avec %repRing',
    '%blitz map %repRing over %l':
        '%blitz appliquer %repRing à %l',
    '%blitz keep items %predRing from %l':
        '%blitz garder les items tels que %predRing de %l',
    '%blitz combine %l using %repRing':
        '%blitz combine les items de %l avec %repRing',
    'for each %upvar in %l %cla':
        'pour chaque %upvar de %l %cla',
    'item':
        'item',
    'add %s to %l':
        'ajouter %s \u00E0 %l',
    'delete %ida of %l':
        'supprimer l\u0027\u00E9l\u00E9ment %ida de %l',
    'insert %s at %idx of %l':
        'ins\u00E9rer %s en position %idx de %l',
    'replace item %idx of %l with %s':
        'remplacer l\u0027\u00E9l\u00E9ment %idx de %l par %s',

    // other
    'Make a block':
        'Nouveau bloc',

   // menus
    // snap menu
    'About...':
        '\u00C0 propos de Snap!...',
    'Reference manual':
        'Manuel de r\u00E9f\u00E9rence',
    'Snap! website':
        'Snap! le site web',
    'Download source':
        'T\u00E9l\u00E9charger le code source',
    'Switch back to user mode':
        'Revenir en mode utilisateur',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'd\u00E9sactiver la fonction morphic',
    'Switch to dev mode':
        'Passer en mode d\u00E9veloppeur',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'activer la fonction morphic',

    // project menu
    'Project notes...':
        'Notes du projet...',
    'New':
        'Nouveau',
    'Open...':
        'Ouvrir...',
    'Save':
        'Sauvegarder',
    'Save As...':
        'Sauvegarder sous...',
    'Import...':
        'Importer...',
    'file menu import hint':
        'importer un projet export\u00E9,\nune biblioth\u00E8que de '
            + 'blocs\n'
            + 'un costume ou un son',
    'Export project as plain text...':
        'Exporter le projet comme texte...',
    'Export project...':
        'Exporter le projet...',
    'save project data as XML\nto your downloads folder':
        'sauvegarder le projet au\nformat XML dans votre\ndossier T\u00E9l\u00E9chargements',
    'show project data as XML\nin a new browser window':
        'ouvrir le projet au format XML\ndans une nouvelle fen\u00EAtre de votre navigateur',
    'Export blocks...':
        'Exporter les blocs ',
    'show global custom block definitions as XML\nin a new browser window':
        'montrer les d\u00E9finitions de bloc global personnalis\u00E9 au format XML \ndans une nouvelle fen\u00EAtre de navigateur',
    'Unused blocks...':
        'Blocs inutilis\u00E9s...',
    'find unused global custom blocks\nand remove their definitions':
        'trouver et supprimer les blocs personnalis\u00E9s inutilis\u00E9s',
    'Remove unused blocks':
        'Supprimer les blocs inutilis\u00E9s',
    'there are currently no unused\nglobal custom blocks in this project':
        'Aucun bloc inutilis\u00E9 dans ce projet',
    'unused block(s) removed':
        'bloc(s) inutilis\u00E9(s) supprim\u00E9(s)',
    'Export summary...':
        'Exporter un r\u00E9sum\u00E9...',
    'open a new browser browser window\n with a summary of this project':
        'voir un résumé de ce projet dans\nune nouvelle fenêtre du navigateur',
    'load the official library of\npowerful blocks':
        'Importer la biblioth\u00E8que officielle\nd\'outils avanc\u00E9s',
    'Libraries...':
        'Biblioth\u00E8ques...',
    'Import library':
        'Importer une biblioth\u00E8que',

    // settings menu
    'Language...':
        'Langue...',
    'Blurred shadows':
        'Ombres floues',
    'uncheck to use solid drop\nshadows and highlights':
        'D\u00E9cocher pour utiliser des rehauts et des ombres \n port\u00E9es floues',
    'check to use blurred drop\nshadows and highlights':
        'cocher pour utiliser des rehauts et des ombres \n port\u00E9es pleines',
    'Zebra coloring':
        'Colorations altern\u00E9es',
    'check to enable alternating\ncolors for nested blocks':
        'cocher pour activer des couleurs altern\u00E9es \n pour les blocs embo\u00EEt\u00E9s',
    'uncheck to disable alternating\ncolors for nested block':
        'd\u00E9cocher pour d\u00E9sactiver des couleurs altern\u00E9es \n pour les blocs embo\u00EEt\u00E9s',
    'Prefer empty slot drops':
        'Pr\u00E9f\u00E9rer des entr\u00E9es vides',
    'settings menu prefer empty slots hint':
        'cocher pour pr\u00E9f\u00E9rer des entr\u00E9es vides \n'
        + 'lors du glisser-d\u00E9poser d\u0027un reporter',
    'uncheck to allow dropped\nreporters to kick out others':
        'd\u00E9cocher pour ne pas pr\u00E9f\u00E9rer des entr\u00E9es vides \n'
    + 'lors du glisser-d\u00E9poser d\u0027un reporter',
    'Long form input dialog':
        'Bo\u00EEte d\u0027entr\u00E9e en mode d\u00E9taill\u00E9',
    'check to always show slot\ntypes in the input dialog':
        'cocher pour toujours ouvrir la bo\u00EEte de dialogue \nd\u0027entr\u00E9e en mode d\u00E9taill\u00E9 : avec tous les types de blocs',
    'uncheck to use the input\ndialog in short form':
        'd\u00E9cocher pour utiliser la bo\u00EEte de dialogue \nd\u0027entr\u00E9e en mode simple ',
    'Virtual keyboard':
        'Clavier virtuel',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'd\u00E9cocher pour d\u00E9sactiver le clavier virtuel pour \nles tablettes et smartphones : mobile devices  ',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'cocher pour activer le clavier virtuel pour \nles tablettes et smartphones : mobile devices  ',
    'Input sliders':
        'Entr\u00E9e curseurs',
    'uncheck to disable\ninput sliders for\nentry fields':
        'd\u00E9cocher pour d\u00E9sactiver le curseur coulissant \ndans le champ de saisie',
    'check to enable\ninput sliders for\nentry fields':
        'cocher pour activer un curseur coulissant \ndans le champ de saisie ',
    'Clicking sound':
        'Cliquetis',
    'uncheck to turn\nblock clicking\nsound off':
        'd\u00E9cocher pour d\u00E9sactiver le cliquetis \n'
    +'lors de l\u0027embo\u00EEtement des blocs' ,
    'check to turn\nblock clicking\nsound on':
        'cocher pour activer le cliquetis \n'
    +'lors de l\u0027embo\u00EEtement des blocs',
    'Turbo mode':
        'Mode turbo',
    'check to prioritize\nscript execution':
        'cocher pour favoriser l\'ex\u00E9cution du script',
    'uncheck to run scripts\nat normal speed':
        'd\u00E9cocher pour ex\u00E9cuter le script en vitesse normale',
    'Flat design':
        'Style al\u00E9g\u00E9',
    'check for alternative\nGUI design':
        'cocher pour un style d\'interface alternatif',
    'uncheck for default\nGUI design':
     'd\u00E9cocher pour le style classique d\'interface',
    'Keyboard Editing':
        '\u00C9dition au clavier',
    'uncheck to disable\nkeyboard editing support':
        'd\u00E9cocher pour d\u00E9sactiver l\'\u00E9dition au clavier',
    'check to enable\nkeyboard editing support':
        'cocher pour activer l\'\u00E9dition au clavier',
    'Thread safe scripts':
        'Scripts réentrants',
    'check to disallow\nscript reentrance':
        'cocher pour interdire\n la r\u00E9entrance des scripts\n'
      + 'et les ex\u00E9cuter s\u00E9par\u00E9ment',
    'uncheck to allow\nscript reentrance':
        'd\u00E9cocher pour permettre\n la r\u00E9entrance des scripts\n'
      + 'o\u00F9 certains s\'ex\u00E9cutent en paral\u00E8lle',
    'Prefer smooth animations':
        'Vitesse d\'animation fixe',
    'uncheck for greater speed\nat variable frame rates':
        'd\u00E9cocher pour une vitesse\nd\'animation maximale (mais variable)',
    'check for smooth, predictable\nanimations across computers':
        'cocher pour une vitesse d\'animation\nfixe et identique sur tous les ordinateurs',

    // inputs
    'with inputs':
        'avec entr\u00E9es',
    'input names:':
        'renseigner un nom :',
    'Input Names:':
        'Renseigner un nom :',

    // context menus:
    'help':
        'Aide',

    // palette:
    'hide primitives':
        'Masquer les blocs de base',
    'show primitives':
        'Afficher les blocs de base',

    // blocks:
    'help...':
        'Aide...',
    'duplicate':
        'dupliquer',
    'make a copy\nand pick it up':
        'faire une copie\n et le d\u00E9placer',
    'only duplicate this block':
        'ne dupliquer que ce bloc',
    'delete':
        'supprimer',
    'script pic...':
        'image du script...',
    'open a new window\nwith a picture of this script':
        'ouvrir une nouvelle fen\u00EAtre avec une \nimage .png de ce script',
    'ringify':
        'entourer',
    'unringify':
        'd\u00E9tourer',

    // custom blocks:
    'delete block definition...':
        'supprimer les d\u00E9finitions de bloc',
    'edit...':
        '\u00E9diter...',

    // sprites:
    'edit':
        '\u00E9diter',
    'move':
        'd\u00E9placer',
    'detach from':
        'D\u00E9tacher de',
    'detach all parts':
        'D\u00E9tacher toutes les parties',
    'export...':
        'Exporter...',
    'paint a new sprite':
        'dessiner un nouveau lutin',

    // scripting area
    'clean up':
        'arranger',
    'arrange scripts\nvertically':
        'arrange scripts\nvertically',
    'add comment':
        'ajouter un commentaire',
    'undrop':
        'retour arrière',
    'make a block...':
        'cr\u00E9er un nouveau bloc...',

    // costumes
    'rename':
        'renommer',
    'export':
        'exporter',
    'rename costume':
        'renommer un costume',
    'Paint a new costume':
        'Dessiner un nouveau costume',

    // sounds
    'Play sound':
        'jouer un son',
    'Stop sound':
        'arr\u00EAter un son',
    'Stop':
        'arr\u00EAter',
    'Play':
        'jouer',
    'rename sound':
        'renommer un son',

    // dialogs
    // buttons
    'OK':
        'OK',
    'Ok':
        'Ok',
    'Cancel':
        'Annuler',
    'Yes':
        'Oui',
    'No':
        'Non',
    'Open':
        'Ouvrir',
    'Browser':
        'Navigateur',
    'Examples':
        'Exemples',

    // help
    'Help':
        'Aide',

    // Project Manager
    'Untitled':
        'Sans titre',
    'Open Project':
        'Ouvrir un projet',
    '(empty)':
        '(vide)',
    'Saved!':
        'Enregistr\u00EA !',
    'Delete Project':
        'Supprimer un projet',
    'Are you sure you want to delete':
        'Souhaitez-vous vraiment supprimer ?',
    'rename...':
        'Renommer...',

     // costume editor
    'Costume Editor':
        '\u00EAditeur de costumes',
    'click or drag crosshairs to move the rotation center':
        'cliquez ou faites d\u00EAfiler la ligne de mire  pour d\u00EAfinir le centre de rotation du costume',

    // project notes
    'Project Notes':
        'Notes du projet',

    // new project
    'New Project':
        'Nouveau projet',
    'Replace the current project with a new one?':
        'Remplacer le projet actuel par un nouveau ?',

    // open project
    'Open Projekt':
        'Ouvrir un projet',

    // save project
    'Save Project As...':
        'Sauvegarder le projet sous...',

    // export blocks
    'Export blocks':
        'exporter des blocs',
    'this project doesn\'t have any\ncustom global blocks yet':
        'ce projet ne contient pas \nde bloc global personnalis\u00E9',
    'select':
        's\u00E9lectionner',
    'all':
        'tous',
    'none':
        'aucun',

    // variable dialog
    'for all sprites':
        'pour tous les lutins',
    'for this sprite only':
        'pour ce lutin uniquement',

    // block dialog
    'Change block':
        'Changer le bloc',
    'Command':
        'Commande',
    'Reporter':
        'Reporter',
    'Predicate':
        'Pr\u00E9dicat',

    // block editor
    'Block Editor':
        '\u00C9diteur de bloc',
    'Apply':
        'Appliquer',

    // block deletion dialog
    'Delete Custom Block':
        'Effacer le bloc personnalis\u00E9',
    'block deletion dialog text':
        '\u00CAtes-vous s\u00FBr de vouloir supprimer ce bloc personnalis\u00E9 \net ' +
            'toutes ses instances ?',

    // input dialog
    'Create input name':
        'Cr\u00E9er le nom de l\u0027entr\u00E9e',
    'Edit input name':
        '\u00C9diter le nom de l\u0027entr\u00E9e',
    'Edit label fragment':
        '\u00C9diter le fragment du label',
    'Title text':
        'Texte du titre',
    'Input name':
        'Nom de l\u0027entr\u00E9e',
    'Delete':
        'Supprimer',
    'Object':
        'Objet',
    'Number':
        'Nombre',
    'Text':
        'Texte',
    'List':
        'Liste',
    'Any type':
        'Tout type',
    'Boolean (T/F)':
        'Bool\u00E9en (V/F)',
    'Command\n(inline)':
        'Commande\n(en ligne)',
    'Command\n(C-shape)':
        'Commande\n(en forme de C)',
    'Any\n(unevaluated)':
        'Tout type\n(non \u00E9valu\u00E9e)',
    'Boolean\n(unevaluated)':
        'Bool\u00E9en\n(non \u00E9valu\u00E9e)',
    'Single input.':
        'Entr\u00E9e unique.',
    'Default Value:':
        'Valeur par d\u00E9faut :',
    'Multiple inputs (value is list of inputs)':
        'Entr\u00E9es multiples (la valeur est une liste des entr\u00E9es)',
    'Upvar - make internal variable visible to caller':
        'Upvar - Rendre la variable interne visible pour l\u0027appelant',
    // delimiters
    'whitespace':
        'espaces blancs',
    'line':
        'lignes',
    'tab':
        'tabulations',
    'cr':
        'retours de ligne',
  'letter':
    'lettres',

    // About Snap
    'About Snap':
        '\u00C0 propos de Snap',
    'Back...':
        'Retour...',
    'License...':
        'Licence...',
    'Modules...':
        'Modules...',
    'Credits...':
        'Contributeurs...',
    'Translators...':
        'Traducteurs...',
    'License':
        'License',
    'current module versions:':
        'Versions du module courant :',
    'Contributors':
        'Contributeurs',
    'Translations':
        'Traductions',

    // variable watchers
    'normal':
        'normal',
    'large':
        'grand',
    'slider':
        'curseur',
    'slider min...':
        'min...',
    'slider max...':
        'max...',
    'Slider minimum value':
        'Valeur minimale du curseur',
    'Slider maximum value':
        'Valeur maximale du curseur',

    // list watchers
    'length: ':
        'Longueur : ',

    // coments
    'add comment here...':
        'ajoute un commentaire ici',

    // drow downs
    // directions
    '(90) right':
        '(90) \u00E0 droite',
    '(-90) left':
        '(-90) \u00E0 gauche',
    '(0) up':
        '(0) vers le haut',
    '(180) down':
        '(180) vers le bas',

    // collision detection
    'mouse-pointer':
        'pointeur souris',
    'edge':
        'bord',
    'pen trails':
        'traces de stylo',
    'random position':
        'position aléatoire',
    'center':
        'centre',

    // costumes
    'Turtle':
        'Pointeur',
    'Empty':
        'Vide',

    // graphical effects
    'color':
        'couleur',
    'fisheye':
        'fisheye',
    'whirl':
        'tourbillon',
    'pixelate':
        'pixelisation',
    'mosaic':
        'mosa\u00EFque',
    'saturation':
        'saturation',
    'brightness':
        'luminosit\u00E9',
    'ghost':
        'transparence',
    'negative':
        'n\u00E9gatif',
    'comic':
        'moir\u00E9',
    'confetti':
        'confetti',

    // keys
    'any key':
        'touche quelconque',
    'space':
        'espace',
    'up arrow':
        'fl\u00E8che vers le haut',
    'down arrow':
        'fl\u00E8che vers le bas',
    'right arrow':
        'fl\u00E8che vers la droite',
    'left arrow':
        'fl\u00E8che vers la gauche',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

     // messages
    'new...':
        'nouveau...',

    // math functions
    'abs':
        'v. absolue',
    'sqrt':
        'sqrt',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    // data types
    'number':
        'nombre',
    'text':
        'texte',
    'Boolean':
        'bool\u00E9en',
    'list':
        'liste',
    'command':
        'bloc de commande',
    'reporter':
        'bloc reporter',
    'predicate':
        'pr\u00E9dicat',

    // list indices
    'last':
        'dernier',
    'any':
        'n\u0027importe quel',
    'random':
        'aléatoire',

    // miscellaneous
    'find blocks...':
        'chercher des blocs...',
    'hide primitives':
        'cacher les primitives',
    'show primitives':
        'montrer les primitives',
    'Login...':
        'Connexion...',
    'Signup...':
        'S\u0027enregistrer...',
    'Reset Password...':
        'Remise \u00E0 z\u00E9ro du mot de passe...',
    'show all':
        'tout montrer',
    'pic...':
        'image...',
    'open a new window\nwith a picture of the stage':
        'ouvre une nouvelle fen\u00EAtre\navec une image de la sc\u00E8ne',
    'scripts pic...':
        'image des scripts...',
    'open a new window\nwith a picture of all scripts':
        'ouvre une nouvelle fen\u00EAtre\navec une image de tous les scripts',
    'Stage size...':
        'Taille de la sc\u00E8ne...',
    'Zoom blocks...':
        'Agrandir les blocs...',

    'Plain prototype labels':
        '\u00C9tiquettes simples de d\u00E9finition',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'd\u00E9cocher pour montrer en permanance le symbole (+)\ndans les \u00e9tiquettes de d\u00E9finition de bloc',
    'check to hide (+) symbols\nin block prototype labels':
        'cocher pour cacher le symbole (+)\ndans les \u00e9tiquettes de d\u00E9finition de bloc',

    'check for flat ends of lines':
        'cocher pour dessiner des fins de ligne plates',
    'uncheck for round ends of lines':
        'd\u00E9cocher pour dessiner des fins de lignes arrondies',
    'Flat line ends':
        'Fins de ligne plates',

    'Codification support':
        'Support de la \u00AB codification \u00BB',
    'uncheck to disable\nblock to text mapping features':
        'd\u00E9cocher pour d\u00E9activer\nla fonction de transformation :\nbloc vers texte',
    'check for block\nto text mapping features':
        'cocher pour activer\nla fonction de transformation :\nbloc vers texte',

    'Inheritance support':
        'Support de l\'h\u00E9ritage',

    'current %dates':
        'date courante %dates',
    'year':
        'ann\u00E9e',
    'month':
        'mois',
    'date':
        'jour',
    'hour':
        'heure',
    'minute':
        'minute',
    'second':
        'seconde',
    'time in milliseconds':
        'heure en millisecondes',
    'day of week':
        'jour de la semaine',

    'brightness':
        'luminosit\u00E9',
    'transparence':
        'transparence',
    'negative':
        'n\u00E9gatif',
    'comic':
        'bande dessin\u00E9e',

    'clicked':
        'cliqu\u00E9',
    'pressed':
        'press\u00E9',
    'dropped':
        'd\u00E9pos\u00E9',
    'mouse-entered':
        'survol\u00E9',
    'mouse-departed':
        'quitt\u00E9',
    'when %b':
        'Quand %b',

    'JavaScript function ( %mult%s ) { %code }':
        'fonction JavaScript ( %mult%s ) { %code }',


    // Copy / Paste
    'Press CTRL+C one more time to effectively copy to clipboard.':
        'Taper une nouvelle fois sur CTRL+C pour copier effectivement vers le presse-papier.',
    'Press CTRL+V one more time to effectively paste from clipboard.':
        'Taper une nouvelle fois sur CTRL+V pour coller effectivement depuis le presse-papier.',
    'Press CTRL+X one more time to effectively cut to clipboard.':
        'Taper une nouvelle fois sur CTRL+X pour couper effectivement vers le presse-papier.',

    // Paint.js
    'undo':
        'd\u00E9faire',
    'Paintbrush tool\n(free draw)':
        'Pinceau\n(dessin \u00E0 main lev\u00E9e)',
    'Stroked Rectangle\n(shift: square)':
        'Rectangle\n(Maj : carr\u00E9)',
    'Stroked Ellipse\n(shift: circle)':
        'Ellipse\n(Maj : cercle)',
    'Eraser tool':
        'Gomme',
    'Set the rotation center':
        'Fixer le centre de rotation',
    'Line tool\n(shift: vertical/horizontal)':
        'Ligne\n(Maj: verticale/horizontale)',
    'Filled Rectangle\n(shift: square)':
        'Rectangle plein\n(Maj: carr\u00E9)',
    'Filled Ellipse\n(shift: circle)':
        'Ellipse pleine\n(Maj: cercle)',
    'Fill a region':
        'Remplir une r\u00E9gion',
    'Pipette tool\n(pick a color anywhere)':
        'Pipette\n(s\u00E9lectionnez une couleur n\u0027importe o\u00F9)',
    'grow':
        'agrandir',
    'shrink':
        'r\u00E9duire',
    'flip \u2194':
        'miroir \u2194',
    'flip \u2195':
        'miroir \u2195',
    'Brush size':
        'Taille de pinceau',
    'Constrain proportions of shapes?\n(you can also hold shift)':
        'Contraindre les proportions de la forme ?\n(vous pouvez aussi maintenir appuy\u00E9 Maj)'

};

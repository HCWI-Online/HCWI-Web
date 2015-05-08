# HCWI Online #

## Table of Contents ##

- [About](#about)
    - [Included Projects](#includes)
        - [Styles](#styles)
        - [Grunt Packages](#grunt)
- [Tool Installation](#tools)
- [Workflow](#workflow)
    - [Set-Up](#setup)
    - [Development](#development)
    - [Production](#production)
- [Resources](#resources)

## <a name="about">About</a> ##

This project was built to provide a basic starting point for for the process of
building responsive, lightweight and scalable websites.

Clone this Repository: `https://github.com/HCWI-Online/HCWI-Web.git`.

```
HCWI-Web/
├── dev/
│   ├── scss/
│   │   ├── modules/
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── partials/
│   │   │   ├── _normalize.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _embeds.scss
│   │   │   ├── _lists.scss
│   │   │   ├── _tables.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _buttons.scss
│   │   │   ├── _utilities.scss
│   │   │   └── _print.scss
│   │   └── main.scss
│   └── index.html
├── Gruntfile.js
├── LICENSE
├── package.json
└── README.md
```

### <a name="includes">Included Projects:</a> ###

#### <a name="styles">Styles:</a> ####
- Modified SCSS version of [Normalize.css](http://necolas.github.io/normalize.css/).
- Modified version of the [HTML5 Biolerplate](https://html5boilerplate.com/) Print Styles.

#### <a name="grunt">Grunt Packages:</a> ####
These packages are automatically included in the `package.json` file through [Gruntjs](http://gruntjs.com/) and can be installed with `npm install`.

- [Grunt](http://gruntjs.com/)
- [Autoprefixer](https://www.npmjs.com/package/grunt-autoprefixer) - `grunt-autoprefixer`
- [Clean](https://www.npmjs.com/package/grunt-contrib-clean) - `grunt-contrib-clean`
- [Copy](https://www.npmjs.com/package/grunt-contrib-copy) - `grunt-contrib-copy`
- [CSSMin](https://www.npmjs.com/package/grunt-contrib-cssmin) - `grunt-contrib-cssmin`
- [ImageMin](https://www.npmjs.com/package/grunt-contrib-imagemin) - `grunt-contrib-imagemin`
- [SASS](https://www.npmjs.com/package/grunt-contrib-sass) - `grunt-contrib-sass`
- [Uglify](https://www.npmjs.com/package/grunt-contrib-uglify) - `grunt-contrib-uglify`
- [Watch](https://www.npmjs.com/package/grunt-contrib-watch) - `grunt-contrib-watch`
- [Load Grunt Tasks](https://www.npmjs.com/package/load-grunt-tasks/) - `load-grunt-tasks`

## <a name="tools">Tool Installation</a> ##

In order to use this workflow, some necessary tools need to be installed first. This only needs to be done once.

1. Install [Node.js](https://nodejs.org/) to PATH (optional checkbox during installation).
2. Install [Ruby 2.2.2](http://rubyinstaller.org/downloads/) to PATH (optional checkbox during installation).
3. Install SASS through Command Line(cmd.exe) using `gem install sass`.
4. Install Grunt through Command Line(cmd.exe) using `npm install -g grunt-cli`.
5. Install [Git](http://git-scm.com/downloads) to PATH(optional checkbox during installation).
6. Create a [GitHub](https://github.com/) account.

## <a name="workflow">Workflow</a> ##

### <a name="setup">Set-Up</a> ###
At first these steps may seem intimidating and unnecessary but in reality are very simple and only take a couple minutes to complete.

All steps are done using the Command Line as it is the quickest and easiest way once you are comfortable using it. You can learn the basics of the Command Line [here](http://www.computerhope.com/issues/chusedos.htm).

1. Navigate to the main client directory.
    - `cd Active Clients\Web Clients`
2. Create a new client directory and navigate into it.
    - Create folder: `mkdir New-Client`
    - Enter folder: `cd New-Client`
3. Copy needed files from remote Git Repository.
    - `git clone https://github.com/HCWI-Online/HCWI-Web.git`
4. Navigate into the new cloned folder and install Node Modules.
	- Enter folder: `cd HCWI-Web`
	- Install Node Modules (this may take a few minutes): `npm install`

After following these steps the site is ready for development. You should end up with a file structure resembling the following exapmle:

```
Active Clients/
└── Web Clients/
	└── New-Client/
		└── HCWI-Web/
			├── dev/
			│   └── ...
			├── node_modules/
			│   └── ...
			├── Gruntfile.js
			├── LICENSE
			├── package.json
			└── README.md
```

### <a name="development">Development</a> ###
The new workflow brings a ton of new capabilities and ways to streamline the development process but also comes with a couple of things to remember.

- Instead of development taking place in the `Web/` folder it will now have to be done in the `HCWI-Web/dev/` folder.
- Instead of writing plain CSS we can now right SCSS which uses the same syntax as CSS but has some cool new features and a much smaller learning curve than the SASS syntax. This means that we will have to write our styles in the `dev/scss/` folder rather than the `css` folder now.

Aside from that small list of things to remember development will remain largely the same as before! In order to begin developing follow the steps below. As with the '[Set-Up](#setup)' section the steps will be completed in the Command Line.

1. Start by navigating to the files of the project.
	- `cd Active Clients\Web Clients\New-Client\HCWI-Web`
2. Initialize Grunt Watch (this makes grunt watch your files as you develop and automatically compiles your SCSS into CSS).
	- Initialize Grunt Watch: `grunt watch`
	- Stop Grunt Watch: `ctrl + c` and answer the prompt with `y`
3. Develop as Usual!

### <a name="production">Production</a> ###
This is where we see most of the benefits of all of these extra steps. Using Grunt, I have created a task that builds the web files that we can use for the main live website. By build I mean it will:

- Compile, Auto-Prefix and Compress / Minify the CSS.
- Compress / Minify the JS.
- Compress all of the images (.png, .jpg, .gif, .svg).
- Get rid of all of the unnecessary files and folders.
- Place them into a seperate folder called `dist/`.

It does all of this without disturbing the main development files which allows us to come back and make quick changes in the future as well as serving as a back-up of the web files.

To complete the project workflow and build the site follow the steps below.

1. Start by navigating to the files of the project.
	- `cd Active Clients\Web Clients\New-Client\HCWI-Web`
2. Run the Grunt Build task (this may take a few minutes).
	- `grunt build`

Grunt will then run the build tasks and create a new folder called `dist/` which will be used for the live web files. Below is an example of the file structure after the build tasks are completed.

```
Active Clients/
└── Web Clients/
	└── New-Client/
		└── HCWI-Web/
			├── dist/
			│   └── ...
			├── dev/
			│   └── ...
			├── node_modules/
			│   └── ...
			├── Gruntfile.js
			├── LICENSE
			├── package.json
			└── README.md
```

After development is finished and the site is live you are free to delete only the `node_modules/` folder and all of it's contents. Which is something that should be done since it takes up a lot space and is easily reaquired which is necessary to make changes in the future.

## <a name="resources">Resources</a> ##

- [Using the Command Line](http://www.computerhope.com/issues/chusedos.htm).
- [Node.js](https://nodejs.org/).
- [Ruby](https://www.ruby-lang.org/en/).
- [Grunt JS](http://gruntjs.com/).
- [GitHub](https://github.com/) / [Git](http://git-scm.com/).
- [SASS](http://sass-lang.com/).

###### Author: Brandon Mc Ghee ######

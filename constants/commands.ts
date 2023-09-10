export enum FileType {
    FILE,
    FOLDER,
    EXECUTEABLE,
}

export type Command = {
    command: string;
    args: string[];
};

export type File = {
    name: string;
    type: FileType;
    path: string;
    content?: string;
};

export type LogEntry = {
    command: string;
    output: string;
    path: string;
};

export const InitialLogEntry: LogEntry = {
    command: "./welcome.sh",
    output: `Welcome! \n Please do not run any commands that would break my lovely website. \n If you need help, type \"help\" and press enter`,
    path: "~",
};

export const fileSystem: File[] = [
    {
        name: "about.txt",
        type: FileType.FILE,
        path: "~",
        content: "hi im johan",
    },
    {
        name: "contact.txt",
        type: FileType.FILE,
        path: "~",
        content: `Website: wulf.gg
                  Github: github.com/johanwulf
                  Mail: johan@wulf.gg`,
    },
    {
        name: "welcome.sh",
        type: FileType.EXECUTEABLE,
        path: "~",
        content: `echo Welcome!
                echo "Please do not run any commands that would break my lovely website."
                echo "If you need help, type "help" and press enter"`,
    },
    {
        name: ".config",
        type: FileType.FOLDER,
        path: "~",
    },
    {
        name: "alacritty.json",
        type: FileType.FILE,
        path: "~/.config",
        content: JSON.stringify({
            colors: {
                titlebar: "#222436",
                background: "#1a1b26",
            },
        }),
    },
];

export const HELP_STRING = `Available commands are:
                    cat <file> - outputs content of file
                    cd <folder> - changes directory to folder 
                    clear - clears terminal window 
                    ls - lists files and folders in current directory
                    mkdir <name> - creates a new directory with specified name in current path
                    touch <name> - creates a new file with specified name in current path
                    `;

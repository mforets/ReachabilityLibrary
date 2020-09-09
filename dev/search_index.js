var documenterSearchIndex = {"docs":
[{"location":"references.html#References-1","page":"References","title":"References","text":"","category":"section"},{"location":"usage.html#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage.html#Utility-functions-1","page":"Usage","title":"Utility functions","text":"","category":"section"},{"location":"usage.html#","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"usage.html#","page":"Usage","title":"Usage","text":"Modules = [ReachabilityModels]","category":"page"},{"location":"usage.html#ReachabilityModels.@relpath-Tuple{String}","page":"Usage","title":"ReachabilityModels.@relpath","text":"@relpath(name) Return the absolute path to file name relative to the executing script.\n\nInput\n\nname – file name\n\nOutput\n\nA string.\n\nNotes\n\nThis macro is equivalent to joinpath(@__DIR__, name). The @relpath macro is used in model scripts to load data files relative to the location of the model, without having to change the directory of the Julia session. For instance, suppose that the folder /home/projects/models contains the script my_model.jl, and suppose that the data file my_data.dat located in the same directory is required to be loaded by my_model.jl. Then,\n\n# suppose the working directory is /home/julia/ and so we ran the script as\n# julia -e \"include(\"../projects/models/my_model.jl\")\"\n# in the model file /home/projects/models/my_model.jl we write:\nd = open(@relpath \"my_data.dat\")\n# do stuff with d\n\nIn this example, the macro @relpath \"my_data.dat\" evaluates to the string /home/projects/models/my_data.dat. If the script my_model.jl only had d = open(\"my_data.dat\"), without @relpath, this command would fail as julia would have looked for my_data.dat in the working directory, resulting in an error that the file /home/julia/my_data.dat is not found.\n\n\n\n\n\n","category":"macro"},{"location":"about.html#About-1","page":"About","title":"About","text":"","category":"section"},{"location":"index.html#ReachabilityModels.jl-1","page":"Home","title":"ReachabilityModels.jl","text":"","category":"section"}]
}
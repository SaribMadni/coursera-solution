var names=new Array();
names[0]="Arham";
names[1]="Ubaid";
names[2]="Ali";
names[3]="Junaid";
names[4]="Jameel";
names[5]="Furqan";
names[6]="Jamshaid";
names[7]="Alia";
names[8]="Sara";
names[9]="Jabbar";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
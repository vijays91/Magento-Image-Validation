if(Validation) {
	Validation.addAllThese([   
		['validate-file-format','File format not support.', function (v, elm) {
                var fileType = new RegExp(/^validate-format-[a-zA-Z]+$/);
				var result = false;
				var realType = elm.value.substring(elm.value.lastIndexOf('.') + 1).toLowerCase();
				if(!realType)
					return true;
				$w(elm.className).each(function(name, index) {
					if (name.match(fileType)) {
						var type = name.split('-')[2];
						type = type.toLowerCase();
						if(realType == type)
							result = true;
					}
				});
			return result;
		}]
	]);
}
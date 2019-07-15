({
	disableControls : function(component) {
		component.find("saveButton").set('v.disabled',true);
        component.find("closeButton").set('v.disabled',true);
	},
    
    enableControls : function(component) {
		component.find("saveButton").set('v.disabled',false);
        component.find("closeButton").set('v.disabled',false);
	},
    
    setFields : function(component){
        console.log('set Fields started');
    	var fieldsString = component.get('v.fieldsString');
        console.log('fieldsString');
        console.log(fieldsString);
        if(fieldsString != null){
        	var fieldList = fieldsString.split(",");
            console.log('fieldList');
            console.log(fieldList);
    		component.set('v.fields', fieldList);
        }
	},
    
    setId : function(component){
        var forceId = component.get('v.forceId');
        console.log('forceID:');
        console.log(forceId);
        var recordId = component.get('v.recordId')
        console.log(component.get('v.recordId'));
        if(forceId == null || forceId == ""){
            console.log('setting force id')
            component.set('v.forceId', recordId);
        }
    },
    
    successToast : function(component){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully.",
            "type": "Success"
        });
        toastEvent.fire();
    }
})
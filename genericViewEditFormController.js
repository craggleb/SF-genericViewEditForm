({
    doInit : function(component, event, helper){
        helper.setFields(component);
        helper.setId(component);
    },
    
	showEdit : function(component, event, helper) {
		$A.util.addClass(component.find("viewForm"), "slds-hide");
        $A.util.removeClass(component.find("editForm"), "slds-hide");
	},
    
   	showView : function(component, event, helper) {
		$A.util.removeClass(component.find("viewForm"), "slds-hide");
        $A.util.addClass(component.find("editForm"), "slds-hide");
	},
    
    handleSubmit : function(component, event, helper){
        helper.disableControls(component);
    },
    
    handleSuccess : function(component, event, helper){
        helper.enableControls(component);
        helper.successToast(component);
        
        if(component.get('v.refreshOnSave')){
        	$A.get('e.force:refreshView').fire();
        }

    },
    
    handleError : function(component, event, helper){
    	helper.enableControls(component);
	}
})
package com.thinkbiganalytics.policies;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sr186054 on 4/22/16.
 */
public class FieldPoliciesJsonTransformer {

  /**
   * JSON ARRY OF com.thinkbiganalytics.feedmgr.rest.model.schema.FieldPolicy objects
   */
  private String jsonFieldPolicies;

  List<com.thinkbiganalytics.feedmgr.rest.model.schema.FieldPolicy>
      uiFieldPolicies;

  public FieldPoliciesJsonTransformer(String jsonFieldPolicies) {
    this.jsonFieldPolicies = jsonFieldPolicies;
    ObjectMapper mapper = new ObjectMapper();
    try {
      uiFieldPolicies =
          mapper.readValue(jsonFieldPolicies,
                           new TypeReference<List<com.thinkbiganalytics.feedmgr.rest.model.schema.FieldPolicy>>() {
                           });

    } catch (IOException e) {
      e.printStackTrace();
    }


  }

  public Map<String, FieldPolicy> buildPolicies() {
    Map<String, FieldPolicy> fieldPolicyMap = new HashMap<>();
    for (com.thinkbiganalytics.feedmgr.rest.model.schema.FieldPolicy uiFieldPolicy : uiFieldPolicies) {
      FieldPolicyTransformer transformer = new FieldPolicyTransformer(uiFieldPolicy);
      fieldPolicyMap.put(uiFieldPolicy.getFieldName(), transformer.buildPolicy());
    }
    return fieldPolicyMap;

  }

}

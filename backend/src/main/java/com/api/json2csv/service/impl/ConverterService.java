package com.api.json2csv.service.impl;

import com.api.json2csv.service.Converter;
import com.fasterxml.jackson.databind.JsonNode;
import org.json.CDL;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class ConverterService implements Converter {
    @Override
    public String convertJsonToCSV(JsonNode json){

        System.out.println(json);

        String jsonString = json.toPrettyString();

        JSONObject output = new JSONObject(jsonString);

        JSONArray docs = output.getJSONArray("json");

        String csv = CDL.toString(docs);

        return csv;
    }
}

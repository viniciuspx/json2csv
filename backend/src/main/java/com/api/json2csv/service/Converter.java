package com.api.json2csv.service;

import com.fasterxml.jackson.databind.JsonNode;

public interface Converter {
    public String convertJsonToCSV(JsonNode json);
}

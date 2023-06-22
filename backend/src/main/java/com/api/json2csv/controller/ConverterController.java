package com.api.json2csv.controller;

import com.api.json2csv.service.impl.ConverterService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/convert")
public class ConverterController {

    @Autowired
    ConverterService converterService;

    @PostMapping
    public String getConversion(@RequestBody JsonNode json){
        return converterService.convertJsonToCSV(json);
    }

    @GetMapping
    public String getHello(){
        return "Hello";
    }
}

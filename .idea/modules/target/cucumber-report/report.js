$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchPage.feature");
formatter.feature({
  "line": 2,
  "name": "DVLA Start page",
  "description": "\nAs a vehicle owner,\nI want to search for my vehicle details,\nSo that I know what information the DVLA holds about my vehicle",
  "id": "dvla-start-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Verify the text on the Search page",
  "description": "",
  "id": "dvla-start-page;verify-the-text-on-the-search-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on the \"Search\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the following text should be present on the page:",
  "rows": [
    {
      "cells": [
        "id",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "Search Heading",
        "Details of the vehicle being checked"
      ],
      "line": 12
    },
    {
      "cells": [
        "Search info",
        "To make an enquirythe vehicle registration number and the vehicle make"
      ],
      "line": 13
    },
    {
      "cells": [
        "Registration Number",
        "Registration number"
      ],
      "line": 14
    },
    {
      "cells": [
        "Vehicle Make",
        "Vehicle make"
      ],
      "line": 15
    },
    {
      "cells": [
        "V5C Document Ref Number Info",
        "To check the vehicle tax rates and date of the latest V5C, please enter the V5C reference number."
      ],
      "line": 16
    },
    {
      "cells": [
        "V5C Document Ref Number",
        "V5C document reference number (optional)"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "Registration number is mandatory",
  "description": "",
  "id": "dvla-start-page;registration-number-is-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on the \"Search\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click the \"Search\" button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see the following error message: Please enter your registration number",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "Vehicle make is mandatory",
  "description": "",
  "id": "dvla-start-page;vehicle-make-is-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I am on the \"Search\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click the \"Search\" button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the following error message: You must select your vehicle make from the list",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 30,
  "name": "Check invalid entry - Registration number",
  "description": "",
  "id": "dvla-start-page;check-invalid-entry---registration-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I am on the \"Search\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter the following data into the form",
  "rows": [
    {
      "cells": [
        "field",
        "value",
        "type"
      ],
      "line": 33
    },
    {
      "cells": [
        "Registration Number",
        "",
        ""
      ],
      "line": 34
    },
    {
      "cells": [
        "Vehicle Make",
        "",
        ""
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click the \"Search\" button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I should see the following error message: You must enter your registration number in a valid format",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("StartNowPage.feature");
formatter.feature({
  "line": 2,
  "name": "DVLA Start page",
  "description": "\nAs a vehicle owner,\nI want to search for my vehicle details,\nSo that I know what information the DVLA holds about my vehicle",
  "id": "dvla-start-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that when I click the start now link i am redirected to the search page",
  "description": "",
  "id": "dvla-start-page;verify-that-when-i-click-the-start-now-link-i-am-redirected-to-the-search-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the vehicle owner clicks the \"Start now\" button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "they shouldbe redirected to the \"search page\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Start now",
      "offset": 30
    }
  ],
  "location": "StartNowPageSteps.scala:22"
});
formatter.result({
  "duration": 317412003,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.StartNowPageSteps$$anonfun$3.apply(StartNowPageSteps.scala:24)\n\tat stepdefs.StartNowPageSteps$$anonfun$3.apply(StartNowPageSteps.scala:22)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:97)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:95)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:234)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:74)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:483)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:144)\n\tat ✽.Given the vehicle owner clicks the \"Start now\" button(StartNowPage.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "search page",
      "offset": 33
    }
  ],
  "location": "StartNowPageSteps.scala:28"
});
formatter.result({
  "status": "skipped"
});
});
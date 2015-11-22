package stepdefs

import cucumber.api.{DataTable, PendingException}
import cucumber.api.scala.{EN, ScalaDsl}
import org.scalatest.Matchers


class SearchPageSteps extends ScalaDsl with EN with Matchers{
  Given("""^I am on the "(.*?)" page$"""){ (arg0:String) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


  Then("""^the following text should be present on the page:$"""){ (arg0:DataTable) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


  When("""^I click the "(.*?)" button$"""){ (arg0:String) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }

  Then("""^I should see the following error message: Please enter your registration number$"""){ () =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


  Then("""^I should see the following error message: You must select your vehicle make from the list$"""){ () =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


  Given("""^I enter the following data into the form$"""){ (arg0:DataTable) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


  Then("""^I should see the following error message: You must enter your registration number in a valid format$"""){ () =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


}

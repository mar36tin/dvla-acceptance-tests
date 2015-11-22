package stepdefs

import cucumber.api.PendingException
import cucumber.api.scala.{EN, ScalaDsl}
import org.scalatest.Matchers

/**
  * Created by martingwarada on 21/11/2015.
  */
class StartNowPageSteps extends ScalaDsl with EN with Matchers {

  Given("""^vehicle owner navigates to "(.*?)"$"""){ (arg0:String) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }

  Then("""^the "(.*?)" link should be visible$"""){ (arg0:String) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }

  Given("""^the vehicle owner clicks the "(.*?)" button$"""){ (arg0:String) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


  Then("""^they shouldbe redirected to the "(.*?)"$"""){ (arg0:String) =>
    //// Write code here that turns the phrase above into concrete actions
    throw new PendingException()
  }


}

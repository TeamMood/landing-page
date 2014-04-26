package controllers

import play.api._
import play.api.mvc._
import play.api.i18n.Lang
import play.api.data.Forms._
import play.api.data.validation.Constraints._
import play.api.data._
import play.api.libs.ws.WS
import play.api.libs.json.{Json, JsValue}
import scala.concurrent.ExecutionContext.Implicits.global

object Application extends Controller {

  def index = Action {
    request => {
      // FIXME : there could be a better way to manage i18n
      Ok(views.html.index(Lang.preferred(request.acceptLanguages)(Play.current)))
    }
  }


  def signup = Action {
    implicit request => {
      val emailForm = Form("input-email" -> email.verifying(nonEmpty))
      emailForm.bindFromRequest.fold(
        errors => Redirect(routes.Application.index),
        email => {

          val ip = request.headers.get("x-forwarded-for").getOrElse(request.remoteAddress)
          val locale = request.headers.get("Accept-Language")
          val browser = request.headers.get("User-Agent")

          saveToGoogleDoc(email, ip, locale, browser)

          saveToMailchimp(email, ip, locale)

          Ok(views.html.thankyou(Lang.preferred(request.acceptLanguages)(Play.current)))
        })

    }
  }

  private def saveToMailchimp(email: String, ip: String, locale: Option[String]) = {

    var url = "https://us4.api.mailchimp.com/2.0//lists/subscribe.json"
    var apiKey = "6bf455be4daddb948b4c1a494a9f6f47-us4"
    var listId = "f0513fb469"

    val language = locale.get.take(2)
    println(language)

    val json: JsValue = Json.obj(
      "apikey" -> apiKey,
      "id" -> listId,
      "email" -> Json.obj(
        "email" -> email
      ),
      "merge_vars" -> Json.obj(
        "optin_ip" -> ip,
        "mc_language" -> language
      ),
      "double_optin" -> false,
      "send_welcome" -> false
    )

    WS.url(url).post(json).map {
      response => Logger.info("Saving to Mailchimp status= %d, body = %s".format(response.status, response.body))
    }

  }


  private def saveToGoogleDoc(email: String, ip: String, locale: Option[String], browser: Option[String]) = {

    val infos = Map(
      "entry.1" -> Seq(email),
      "entry.1924653994" -> Seq(ip),
      "entry.535205848" -> Seq(locale.get),
      "entry.192311241" -> Seq(browser.get))

    // record infos to Google Doc asynchronously
    WS.url("https://docs.google.com/forms/d/1vChMxuVCzNCLqPTusirUwrnAdRzBCFvVcmqqUxa5zuA/formResponse").post(infos)

  }

}
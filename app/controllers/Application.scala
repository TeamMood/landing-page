package controllers

import play.api._
import play.api.mvc._
import play.api.i18n.Lang
import play.api.i18n.MessagesPlugin
import play.api.i18n.Messages
import play.api.data.Forms._
import play.api.data._
import play.api.libs.ws.WS

object Application extends Controller {

  def index = Action { request =>
    {
      // FIXME : there could be a better way to manage i18n
      Ok(views.html.index(Lang.preferred(request.acceptLanguages)(Play.current)))
    }
  }

  def signup = Action {
    implicit request =>
      {
        val emailForm = Form("input-email" -> text)
        val email = emailForm.bindFromRequest.get

        val ip = request.headers.get("x-forwarded-for").getOrElse(request.remoteAddress)
        val locale = request.headers.get("Accept-Language")
        val browser = request.headers.get("User-Agent")

        save(email, ip, locale, browser)

        Ok(email)
      }
  }

  private def save(email: String, ip: String, locale: Option[String], browser: Option[String]) = {

    val infos = Map(
      "entry.1" -> Seq(email),
      "entry.1924653994" -> Seq(ip),
      "entry.535205848" -> Seq(locale.get),
      "entry.192311241" -> Seq(browser.get))

    // record infos to Google Doc asynchronously
    WS.url("https://docs.google.com/forms/d/1vChMxuVCzNCLqPTusirUwrnAdRzBCFvVcmqqUxa5zuA/formResponse").post(infos)

  }

}
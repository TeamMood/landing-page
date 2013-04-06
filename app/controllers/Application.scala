package controllers

import play.api._
import play.api.mvc._
import play.api.i18n.Lang
import play.api.i18n.MessagesPlugin
import play.api.i18n.Messages
import play.api.data.Forms._
import play.api.data._

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
        val emailForm = Form(
          "input-email" -> text)
        val email = emailForm.bindFromRequest.get

        //url: 'https://docs.google.com/forms/d/1vChMxuVCzNCLqPTusirUwrnAdRzBCFvVcmqqUxa5zuA/formResponse',
        //entry.1

        Ok(email)
      }

  }

}
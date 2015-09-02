<form id="form1" name="form1" method="post" action="http://www.welcometohcwi.com/sendmail/sendmail.php">
	<input type="hidden" name="token" id="token" value="">
	<input type="hidden" name="successurl" id="successurl" value="">
	<input type="hidden" name="errorurl" id="errorurl" value="">
	<input type="hidden" name="emailaddress" id="emailaddress" value="">
	<input type="hidden" name="clientname" id="clientname" value="">
	<input type="hidden" name="description" id="description" value="">
	<input type="hidden" name="emailsubject" id="emailsubject" value="">

	<input type="text" placeholder="Name:" name="name">
	<input type="tel" placeholder="Telephone:" name="telephone">
	<input type="email" placeholder="E-Mail:" name="email">
	<textarea type="text" placeholder="Message:" name="message"></textarea>

	<button type="submit">Submit</button>
</form>
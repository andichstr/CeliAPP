<?php

try {
    $ch = curl_init();

    if (FALSE === $ch)
        throw new Exception('failed to initialize');

    //$url and $data are the same as above
    $url = 'https://extranet.anmat.gov.ar/ALG_Mobile/asp/wfAlimentos.aspx';
    $data = array(
        '__VIEWSTATE' => urlencode($_REQUEST['__VIEWSTATE']),
        '__VIEWSTATEGENERATOR' => urlencode($_REQUEST['__VIEWSTATEGENERATOR']),
        '__EVENTVALIDATION' => urlencode($_REQUEST['__EVENTVALIDATION']),
        'txtRNPA' => urlencode($_REQUEST['txtRNPA']),
        'txtMarca' => urlencode($_REQUEST['txtMarca']),
        'txtNombFant' => urlencode($_REQUEST['txtNombFant']),
        'cboEstado' => urlencode($_REQUEST['cboEstado']),
        'cboTipoProd' => urlencode($_REQUEST['cboTipoProd']),
    );
    $params = "VIEWSTATE=%2FwEPDwULLTE3ODMyNzEzNjMPZBYCAgMPZBYEAhMPEA8WAh4LXyFEYXRhQm91bmRnZBAVOQ5TZWxlY2Npb25hci4uLgdBY2VpdGVzLEFkaXRpdm9zIHkgbWF0ZXJpYXMgcHJpbWFzIHBhcmEgbGEgaW5kdXN0cmlhGUFndWFzIHkgYWd1YXMgZ2FzaWZpY2FkYXMJQWxmYWpvcmVzBUFsZ2FzJUFsaW1lbnRvcyBwYXJhIGxhY3RhbnRlcyAoMC0xMiBtZXNlcyk1QWxpbWVudG9zIHBhcmEgbmnDsW9zIGVuIHByaW1lcmEgaW5mYW5jaWEgKDEtMyBhw7FvcykwQWxpbWVudG9zIHBhcmEgcHJvcMOzc2l0b3MgbcOpZGljb3MgZXNwZWPDrWZpY29zEkF6w7pjYXJlcyB5IG1pZWxlcxJCYXJyaXRhcyBkZSBjZXJlYWwXQmViaWRhcyBhIGJhc2UgZGUgbGVjaGUUQmViaWRhcyBhbGNvaMOzbGljYXMwQmViaWRhcyBzaW4gYWxjb2hvbCB5IHByb2R1Y3RvcyBwYXJhIHByZXBhcmFybGFzFUJvbWJvbmVzIHkgY2hvY29sYXRlcwZDYWNhb3MTQ2Fmw6lzIHkgc3VzdGl0dXRvcw5DYWxkb3MgeSBzb3BhcyhDYXJhbWVsb3MsIGNoaWNsZXMsIGNvbmZpdGVzIHkgcGFzdGlsbGFzLkNhcm5lcyAodmFjdW5vLCBwb2xsbywgY2VyZG8sIHBlc2NhZG8geSBvdHJhcykWQ2VyZWFsZXMgcGFyYSBkZXNheXVubyhDZXJlYWxlcywgaGFyaW5hcywgcHJlbWV6Y2xhcyB5IHNlbWlsbGFzJENvYmVydHVyYXMsIHJlbGxlbm9zIHkgc2Fsc2FzIGR1bGNlcyNDb21pZGFzIHByZXBhcmFkYXMgeSBzZW1pZWxhYm9yYWRhcwtDb25kaW1lbnRvcxNDb25zZXJ2YXMgZGUgY2FybmVzE0NvbnNlcnZhcyBkZSBmcnV0YXMtQ29uc2VydmFzIGRlIGhvcnRhbGl6YXMsIHZlcmR1cmFzIHkgbGVndW1icmVzBkNyZW1hcw9EdWxjZXMgZGUgbGVjaGUURWR1bGNvcmFudGVzIGRlIG1lc2EURmlhbWJyZXMgeSBlbWJ1dGlkb3MYRnJ1dGFzIHNlY2FzIHkgZGVzZWNhZGFzFUdhbGxldGFzIHkgZ2FsbGV0aXRhcwlHb2xvc2luYXMdSG9ydGFsaXphcywgdmVyZHVyYXMgeSBob25nb3MGTGVjaGVzEkxlY2hlcyBmZXJtZW50YWRhcwlMZWd1bWJyZXMJTGV1ZGFudGVzCE1hbnRlY2FzCk1hcmdhcmluYXMfTWVybWVsYWRhcywgY29uZml0dXJhcyB5IGR1bGNlcx9QYW5lcyB5IHByb2R1Y3RvcyBkZSBwYW5hZGVyw61hLlBhc3RhcyBzZWNhcyB5IGZyZXNjYXMsIHJlbGxlbmFzIHkgc2luIHJlbGxlbm8uUG9zdHJlcywgZmxhbmVzIHkgaGVsYWRvcyBsaXN0b3MgcGFyYSBjb25zdW1pchhQcm9kdWN0b3MgZGUgY29uZml0ZXLDrWEYUHJvZHVjdG9zIGRlIHJlcG9zdGVyw61hPFByb2R1Y3RvcyBwYXJhIHByZXBhcmFyIHBvc3RyZXMsIGZsYW5lcywgZ2VsYXRpbmFzIHkgaGVsYWRvcwZRdWVzb3MFU2FsZXMaU2Fsc2FzLCBhZGVyZXpvcyB5IGFsacOxb3MGU25hY2tzFVN1cGxlbWVudG9zIGRpZXRhcmlvcxFUw6lzIGUgaW5mdXNpb25lcwpZZXJiYSBtYXRlB1lvZ3VyZXMVOQEwB0FjZWl0ZXMsQWRpdGl2b3MgeSBtYXRlcmlhcyBwcmltYXMgcGFyYSBsYSBpbmR1c3RyaWEZQWd1YXMgeSBhZ3VhcyBnYXNpZmljYWRhcwlBbGZham9yZXMFQWxnYXMlQWxpbWVudG9zIHBhcmEgbGFjdGFudGVzICgwLTEyIG1lc2VzKTVBbGltZW50b3MgcGFyYSBuacOxb3MgZW4gcHJpbWVyYSBpbmZhbmNpYSAoMS0zIGHDsW9zKTBBbGltZW50b3MgcGFyYSBwcm9ww7NzaXRvcyBtw6lkaWNvcyBlc3BlY8OtZmljb3MSQXrDumNhcmVzIHkgbWllbGVzEkJhcnJpdGFzIGRlIGNlcmVhbBdCZWJpZGFzIGEgYmFzZSBkZSBsZWNoZRRCZWJpZGFzIGFsY29ow7NsaWNhczBCZWJpZGFzIHNpbiBhbGNvaG9sIHkgcHJvZHVjdG9zIHBhcmEgcHJlcGFyYXJsYXMVQm9tYm9uZXMgeSBjaG9jb2xhdGVzBkNhY2FvcxNDYWbDqXMgeSBzdXN0aXR1dG9zDkNhbGRvcyB5IHNvcGFzKENhcmFtZWxvcywgY2hpY2xlcywgY29uZml0ZXMgeSBwYXN0aWxsYXMuQ2FybmVzICh2YWN1bm8sIHBvbGxvLCBjZXJkbywgcGVzY2FkbyB5IG90cmFzKRZDZXJlYWxlcyBwYXJhIGRlc2F5dW5vKENlcmVhbGVzLCBoYXJpbmFzLCBwcmVtZXpjbGFzIHkgc2VtaWxsYXMkQ29iZXJ0dXJhcywgcmVsbGVub3MgeSBzYWxzYXMgZHVsY2VzI0NvbWlkYXMgcHJlcGFyYWRhcyB5IHNlbWllbGFib3JhZGFzC0NvbmRpbWVudG9zE0NvbnNlcnZhcyBkZSBjYXJuZXMTQ29uc2VydmFzIGRlIGZydXRhcy1Db25zZXJ2YXMgZGUgaG9ydGFsaXphcywgdmVyZHVyYXMgeSBsZWd1bWJyZXMGQ3JlbWFzD0R1bGNlcyBkZSBsZWNoZRRFZHVsY29yYW50ZXMgZGUgbWVzYRRGaWFtYnJlcyB5IGVtYnV0aWRvcxhGcnV0YXMgc2VjYXMgeSBkZXNlY2FkYXMVR2FsbGV0YXMgeSBnYWxsZXRpdGFzCUdvbG9zaW5hcx1Ib3J0YWxpemFzLCB2ZXJkdXJhcyB5IGhvbmdvcwZMZWNoZXMSTGVjaGVzIGZlcm1lbnRhZGFzCUxlZ3VtYnJlcwlMZXVkYW50ZXMITWFudGVjYXMKTWFyZ2FyaW5hcx9NZXJtZWxhZGFzLCBjb25maXR1cmFzIHkgZHVsY2VzH1BhbmVzIHkgcHJvZHVjdG9zIGRlIHBhbmFkZXLDrWEuUGFzdGFzIHNlY2FzIHkgZnJlc2NhcywgcmVsbGVuYXMgeSBzaW4gcmVsbGVuby5Qb3N0cmVzLCBmbGFuZXMgeSBoZWxhZG9zIGxpc3RvcyBwYXJhIGNvbnN1bWlyGFByb2R1Y3RvcyBkZSBjb25maXRlcsOtYRhQcm9kdWN0b3MgZGUgcmVwb3N0ZXLDrWE8UHJvZHVjdG9zIHBhcmEgcHJlcGFyYXIgcG9zdHJlcywgZmxhbmVzLCBnZWxhdGluYXMgeSBoZWxhZG9zBlF1ZXNvcwVTYWxlcxpTYWxzYXMsIGFkZXJlem9zIHkgYWxpw7FvcwZTbmFja3MVU3VwbGVtZW50b3MgZGlldGFyaW9zEVTDqXMgZSBpbmZ1c2lvbmVzClllcmJhIG1hdGUHWW9ndXJlcxQrAzlnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dkZAIZDzwrABEBARAWABYAFgBkGAEFCUdyaWRWaWV3MQ9nZB2Z6Hs%2BmmKHB2uupdx8cf1S4yNhJxY5TFi3gCF4wDNK&__VIEWSTATEGENERATOR=999E829B&__EVENTVALIDATION=%2FwEWQQKe4ZPIAQLvgt2yCAL61uOuDwLWrNecDwK8p7X2AwLburRcApy1m%2FoCAsniku0HAubKrJ0MAtD1p%2FwFArfx%2BI0BApDYxpMBAvbC5akPAuS7o7QEAsy0n4oMAvLi1JwNAvuMwYMBAsHA6osKAoyQ1fAMAvn04ucEAo7arHwCocL4zQMC0KSuUAKn8eq7AwLWz9GRDgKHzPKIBwKTm8HVDQK85vD6CgLc%2F4SCBgLJk53cAwLn2sKiDALBjOL1BQK24dGPAQLnyeH4BgLluMrMAwKc9t35CQLH0ID7AgLe4JWYAwLp0%2BmbCgLktoX%2FBAL3udHwDgKV58GaDgLa3cMnAqGngoABAoTH6aIPAserktsEApOVuo0OAuKR2eMEAoDO3IkDAsrUk9cJAp3bgMEBAtTS16UPAvWbhLIOAqrKgqQOApL%2F35AOArvg%2F4oPApSNooYBAunBicwKAur0m6UIAsbX%2FvUOAvPGm5sNAtL2%2FMUNAo3HjpcOAqb7qtAMAoznisYGaxY8ToY1gXYOiD4d0KIlRxsvSfSaOMY4Dt1oSfaehLI%3D&txtRNPA=&txtMarca=&txtNombFant=&cboEstado=Vigente&cboTipoProd=0";

    $fields_string = "";

//url-ify the data for the POST
    foreach ($data as $key => $value) {
        $fields_string .= $key . '=' . $value . '&';
    }
    rtrim($fields_string, '&');

//set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($data));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSLVERSION, 3);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
    $content = curl_exec($ch);

    var_dump($content);
    if (FALSE === $content) {
        throw new Exception(curl_error($ch), curl_errno($ch));
    }
    // ...process $content now
} catch (Exception $e) {

    trigger_error(sprintf(
                    'Curl failed with error #%d: %s', $e->getCode(), $e->getMessage()), E_USER_ERROR);
}
?>
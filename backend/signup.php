<?php
header('Content-Type: application/json; charset=utf-8');
// header('Content-Type: text/plain; charset=utf-8');

//글씨로 받은 데이터
$id = $_POST['id'];
$pw = $_POST['pw'];
$year = $_POST['year'];
$month = $_POST['month'];
$gender = $_POST['gender'];
$mans = implode('ㅎㅎ', $_POST['mans']); //배열을 문자열로 변환

// 여기까진 성공 echo "에코된거 : $id $pw $year $month $gender $mans";



$response = array();


// MySQL DB 에 저장 (테이블 : minimini)
$db = mysqli_connect("localhost", "baechu10", "a1s2d3f4!", "baechu10");
mysqli_query($db, "set names utf8");
//삽입 : id, pw, year, month, gender, mans, imgs
$sql = "INSERT INTO minimini(id, pw, year, month, gender, mans) VALUES('$id','$pw','$year','$month','$gender','$mans')";
$result = mysqli_query($db, $sql);

if ($result) {
    $response["success"] = true;
    $response["message"] = "회원가입이 완료되었습니다.";

    //이미지 파일 처리
    $imgs = array();
    if(!empty($_FILES['imgs'])) {
        $files = $_FILES['imgs'];
        $file_num = count($files['name']);

        for ($i = 0; $i < $file_num; $i++) {
            $fileName = $files['name'][$i];
            // $fileSize = $files['size'][$i];
            // $fileType = $files['type'][$i];
            $tmpName = $files['tmp_name'][$i];
            $dstName = "./upload/IMG_" . date('YmdHis') . $fileName;
            //이미지 파일을 업로드 폴더로 이동
            if(move_uploaded_file($tmpName, $dstName)) {
                $imgs[] = $dstName; //이미지 파일 경로를 배열에 추가
            }
        }
    }

    // 이미지파일경로가 있는 경우에만, 데이터베이스에 추가하기
    if(!empty($imgs)) {
        var_dump($imgs);

        $imgPaths = implode(',', $imgs); //이미지파일경로를 쉽표구분해서 문자열로 변환
        // $sqlUpdateImgs = "INSERT INTO minimini "
        $sqlUpdateImgs = "UPDATE minimini SET imgs='$imgPaths' WHERE id='$id'";
        $resultUpdateImgs = mysqli_query($db, $sqlUpdateImgs);
        if($resultUpdateImgs){
            $response["message"] .= "이미지 파일이 성공적으로 업로드되었습니다.";
        } else {
            $response["message"] .= "이미지 파일업로드에 실패하였습니다.";
        }
    }

    $response['imgs'] = $imgs;
} else {
    $response["success"] = false;
    $response["message"] = "회원가입이 실패하였습니다. ";
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);

mysqli_close($db);


?>
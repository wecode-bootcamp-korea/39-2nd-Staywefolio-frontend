import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);

  return data;
}

// 사용 할 때 : const 변수명 = useFetch(url주소);
//  변수명을 맵 돌릴때 사용 {변수명.map(index값 =>())

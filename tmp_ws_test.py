import socket, base64

s = socket.create_connection(('192.168.0.120', 3000), timeout=5)
key = base64.b64encode(b'1234567890123456').decode()
req = (
    'GET /_next/webpack-hmr?id=SxPTbObkg1zLvPZVxthzN HTTP/1.1\r\n'
    'Host: 192.168.0.120:3000\r\n'
    'Upgrade: websocket\r\n'
    'Connection: Upgrade\r\n'
    f'Sec-WebSocket-Key: {key}\r\n'
    'Sec-WebSocket-Version: 13\r\n\r\n'
)
s.send(req.encode())
data = s.recv(1024)
print(data.decode(errors='replace'))
s.close()

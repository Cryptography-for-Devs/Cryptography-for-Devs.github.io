# Example showing why UTF-8 fails
hash_byte = bytes([0x80, 0x00, 0x0A])

print("As hex:", hash_byte.hex())  
# Output: "80000a" (clean and readable)

try:
    print("As UTF-8:", hash_byte.decode('utf-8'))
except UnicodeDecodeError as e:
    print("UTF-8 decode failed:", e)
    # Will fail because 0x80 is invalid UTF-8

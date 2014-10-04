import mraa
import time

print (mraa.getVersion())
while True:
        x = mraa.Aio(0)
        y = mraa.Aio(1)
        print (str(x.read()) + ', '+ str(y.read()))
        time.sleep(0.2)
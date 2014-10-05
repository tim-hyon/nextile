from sklearn.ensemble import RandomForestRegressor

X = [[0, 0], [1, 1]]
Y = [0, 1]

clf = RandomForestRegressor(n_estimators=20)
clf = clf.fit(X, Y)

print clf.predict([0,0])
File.open('test_exercise.rb', 'w') do |f|
	100.times do |i|
		f.write("###################\n")
		f.write("####Exercise #{i+1}\n")
		f.write("###################\n\n")
	end
end

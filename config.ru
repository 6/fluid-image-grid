require 'sinatra'

Sinatra.new do
  set :root, File.expand_path(".")
  set :public_folder, Proc.new { File.join(root, "public") }
  set :views, Proc.new { File.join(root, "views") }

  get '/' do
    erb :index
  end
end.run!

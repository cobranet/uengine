class User < ActiveRecord::Base
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.image = auth.info.image
      user.location = auth.info.location
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end

  def format_image_name
    path = Rails.root.join("app","assets","images","users")
    "#{path}/user#{self.id}.png"
  end
  
  def download_image
    open(format_image_name, 'wb') do |file|
      file << open(self.image.gsub(/http/,"https")).read
    end
    self.haveimage = 1
    self.save!
  end
  
  def image_file
    if self.haveimage == 1 &&  Rails.env.production? == false
    #      asset_url("assets/users/user#{self.id}.png")
            asset_url("assets/users/user#{self.id}.png")
    else
      download_image
      self.image
    end
  end
end

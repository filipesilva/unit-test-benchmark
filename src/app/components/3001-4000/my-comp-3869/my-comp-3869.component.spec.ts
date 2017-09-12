import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3869Component } from './my-comp-3869.component';

describe('MyComp3869Component', () => {
  let component: MyComp3869Component;
  let fixture: ComponentFixture<MyComp3869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4869Component } from './my-comp-4869.component';

describe('MyComp4869Component', () => {
  let component: MyComp4869Component;
  let fixture: ComponentFixture<MyComp4869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

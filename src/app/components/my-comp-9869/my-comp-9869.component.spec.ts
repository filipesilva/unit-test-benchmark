import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9869Component } from './my-comp-9869.component';

describe('MyComp9869Component', () => {
  let component: MyComp9869Component;
  let fixture: ComponentFixture<MyComp9869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

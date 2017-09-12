import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7869Component } from './my-comp-7869.component';

describe('MyComp7869Component', () => {
  let component: MyComp7869Component;
  let fixture: ComponentFixture<MyComp7869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

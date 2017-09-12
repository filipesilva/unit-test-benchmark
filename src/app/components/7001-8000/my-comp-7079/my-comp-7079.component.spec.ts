import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7079Component } from './my-comp-7079.component';

describe('MyComp7079Component', () => {
  let component: MyComp7079Component;
  let fixture: ComponentFixture<MyComp7079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

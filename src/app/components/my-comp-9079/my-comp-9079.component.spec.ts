import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9079Component } from './my-comp-9079.component';

describe('MyComp9079Component', () => {
  let component: MyComp9079Component;
  let fixture: ComponentFixture<MyComp9079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

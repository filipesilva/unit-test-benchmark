import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp185Component } from './my-comp-185.component';

describe('MyComp185Component', () => {
  let component: MyComp185Component;
  let fixture: ComponentFixture<MyComp185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7679Component } from './my-comp-7679.component';

describe('MyComp7679Component', () => {
  let component: MyComp7679Component;
  let fixture: ComponentFixture<MyComp7679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

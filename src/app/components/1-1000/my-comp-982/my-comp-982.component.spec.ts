import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp982Component } from './my-comp-982.component';

describe('MyComp982Component', () => {
  let component: MyComp982Component;
  let fixture: ComponentFixture<MyComp982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

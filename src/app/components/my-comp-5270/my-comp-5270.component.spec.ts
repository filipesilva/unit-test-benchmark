import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5270Component } from './my-comp-5270.component';

describe('MyComp5270Component', () => {
  let component: MyComp5270Component;
  let fixture: ComponentFixture<MyComp5270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

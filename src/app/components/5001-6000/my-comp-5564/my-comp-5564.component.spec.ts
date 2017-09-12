import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5564Component } from './my-comp-5564.component';

describe('MyComp5564Component', () => {
  let component: MyComp5564Component;
  let fixture: ComponentFixture<MyComp5564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

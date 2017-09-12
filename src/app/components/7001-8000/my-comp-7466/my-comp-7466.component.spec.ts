import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7466Component } from './my-comp-7466.component';

describe('MyComp7466Component', () => {
  let component: MyComp7466Component;
  let fixture: ComponentFixture<MyComp7466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

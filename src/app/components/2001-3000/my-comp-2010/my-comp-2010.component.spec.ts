import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2010Component } from './my-comp-2010.component';

describe('MyComp2010Component', () => {
  let component: MyComp2010Component;
  let fixture: ComponentFixture<MyComp2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

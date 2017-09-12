import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2001Component } from './my-comp-2001.component';

describe('MyComp2001Component', () => {
  let component: MyComp2001Component;
  let fixture: ComponentFixture<MyComp2001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

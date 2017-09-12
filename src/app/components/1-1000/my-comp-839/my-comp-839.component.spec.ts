import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp839Component } from './my-comp-839.component';

describe('MyComp839Component', () => {
  let component: MyComp839Component;
  let fixture: ComponentFixture<MyComp839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

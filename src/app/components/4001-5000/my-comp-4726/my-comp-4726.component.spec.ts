import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4726Component } from './my-comp-4726.component';

describe('MyComp4726Component', () => {
  let component: MyComp4726Component;
  let fixture: ComponentFixture<MyComp4726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

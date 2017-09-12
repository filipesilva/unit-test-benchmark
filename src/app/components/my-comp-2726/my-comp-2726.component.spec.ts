import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2726Component } from './my-comp-2726.component';

describe('MyComp2726Component', () => {
  let component: MyComp2726Component;
  let fixture: ComponentFixture<MyComp2726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

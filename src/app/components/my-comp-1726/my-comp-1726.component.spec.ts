import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1726Component } from './my-comp-1726.component';

describe('MyComp1726Component', () => {
  let component: MyComp1726Component;
  let fixture: ComponentFixture<MyComp1726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

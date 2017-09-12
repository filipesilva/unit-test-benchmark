import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1023Component } from './my-comp-1023.component';

describe('MyComp1023Component', () => {
  let component: MyComp1023Component;
  let fixture: ComponentFixture<MyComp1023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

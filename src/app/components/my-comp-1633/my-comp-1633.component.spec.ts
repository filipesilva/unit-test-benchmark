import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1633Component } from './my-comp-1633.component';

describe('MyComp1633Component', () => {
  let component: MyComp1633Component;
  let fixture: ComponentFixture<MyComp1633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

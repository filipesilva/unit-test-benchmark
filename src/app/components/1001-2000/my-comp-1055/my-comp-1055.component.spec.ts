import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1055Component } from './my-comp-1055.component';

describe('MyComp1055Component', () => {
  let component: MyComp1055Component;
  let fixture: ComponentFixture<MyComp1055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1918Component } from './my-comp-1918.component';

describe('MyComp1918Component', () => {
  let component: MyComp1918Component;
  let fixture: ComponentFixture<MyComp1918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

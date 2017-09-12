import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9501Component } from './my-comp-9501.component';

describe('MyComp9501Component', () => {
  let component: MyComp9501Component;
  let fixture: ComponentFixture<MyComp9501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

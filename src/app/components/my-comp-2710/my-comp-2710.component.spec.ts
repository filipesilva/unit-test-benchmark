import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2710Component } from './my-comp-2710.component';

describe('MyComp2710Component', () => {
  let component: MyComp2710Component;
  let fixture: ComponentFixture<MyComp2710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

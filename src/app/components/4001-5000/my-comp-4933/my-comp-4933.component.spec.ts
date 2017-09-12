import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4933Component } from './my-comp-4933.component';

describe('MyComp4933Component', () => {
  let component: MyComp4933Component;
  let fixture: ComponentFixture<MyComp4933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

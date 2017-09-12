import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp918Component } from './my-comp-918.component';

describe('MyComp918Component', () => {
  let component: MyComp918Component;
  let fixture: ComponentFixture<MyComp918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

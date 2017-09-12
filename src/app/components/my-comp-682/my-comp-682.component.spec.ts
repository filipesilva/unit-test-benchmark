import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp682Component } from './my-comp-682.component';

describe('MyComp682Component', () => {
  let component: MyComp682Component;
  let fixture: ComponentFixture<MyComp682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6932Component } from './my-comp-6932.component';

describe('MyComp6932Component', () => {
  let component: MyComp6932Component;
  let fixture: ComponentFixture<MyComp6932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

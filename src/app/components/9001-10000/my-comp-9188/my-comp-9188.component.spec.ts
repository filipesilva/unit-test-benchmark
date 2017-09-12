import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9188Component } from './my-comp-9188.component';

describe('MyComp9188Component', () => {
  let component: MyComp9188Component;
  let fixture: ComponentFixture<MyComp9188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

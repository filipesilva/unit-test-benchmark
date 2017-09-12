import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9047Component } from './my-comp-9047.component';

describe('MyComp9047Component', () => {
  let component: MyComp9047Component;
  let fixture: ComponentFixture<MyComp9047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

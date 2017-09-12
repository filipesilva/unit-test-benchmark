import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9851Component } from './my-comp-9851.component';

describe('MyComp9851Component', () => {
  let component: MyComp9851Component;
  let fixture: ComponentFixture<MyComp9851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

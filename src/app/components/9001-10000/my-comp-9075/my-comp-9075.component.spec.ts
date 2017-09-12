import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9075Component } from './my-comp-9075.component';

describe('MyComp9075Component', () => {
  let component: MyComp9075Component;
  let fixture: ComponentFixture<MyComp9075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

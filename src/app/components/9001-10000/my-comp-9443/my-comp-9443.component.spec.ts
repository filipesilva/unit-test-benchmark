import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9443Component } from './my-comp-9443.component';

describe('MyComp9443Component', () => {
  let component: MyComp9443Component;
  let fixture: ComponentFixture<MyComp9443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

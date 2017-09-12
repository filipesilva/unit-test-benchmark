import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp932Component } from './my-comp-932.component';

describe('MyComp932Component', () => {
  let component: MyComp932Component;
  let fixture: ComponentFixture<MyComp932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

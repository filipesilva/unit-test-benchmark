import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4791Component } from './my-comp-4791.component';

describe('MyComp4791Component', () => {
  let component: MyComp4791Component;
  let fixture: ComponentFixture<MyComp4791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

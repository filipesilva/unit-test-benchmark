import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp541Component } from './my-comp-541.component';

describe('MyComp541Component', () => {
  let component: MyComp541Component;
  let fixture: ComponentFixture<MyComp541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

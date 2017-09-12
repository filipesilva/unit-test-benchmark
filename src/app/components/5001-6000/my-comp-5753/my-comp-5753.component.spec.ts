import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5753Component } from './my-comp-5753.component';

describe('MyComp5753Component', () => {
  let component: MyComp5753Component;
  let fixture: ComponentFixture<MyComp5753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5325Component } from './my-comp-5325.component';

describe('MyComp5325Component', () => {
  let component: MyComp5325Component;
  let fixture: ComponentFixture<MyComp5325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

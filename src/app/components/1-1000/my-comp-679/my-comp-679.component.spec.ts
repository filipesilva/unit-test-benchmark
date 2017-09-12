import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp679Component } from './my-comp-679.component';

describe('MyComp679Component', () => {
  let component: MyComp679Component;
  let fixture: ComponentFixture<MyComp679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

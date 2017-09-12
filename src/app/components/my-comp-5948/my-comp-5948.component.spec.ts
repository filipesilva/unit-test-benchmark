import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5948Component } from './my-comp-5948.component';

describe('MyComp5948Component', () => {
  let component: MyComp5948Component;
  let fixture: ComponentFixture<MyComp5948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

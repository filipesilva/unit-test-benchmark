import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5040Component } from './my-comp-5040.component';

describe('MyComp5040Component', () => {
  let component: MyComp5040Component;
  let fixture: ComponentFixture<MyComp5040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

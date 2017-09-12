import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5822Component } from './my-comp-5822.component';

describe('MyComp5822Component', () => {
  let component: MyComp5822Component;
  let fixture: ComponentFixture<MyComp5822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

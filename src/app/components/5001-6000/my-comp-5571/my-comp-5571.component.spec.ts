import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5571Component } from './my-comp-5571.component';

describe('MyComp5571Component', () => {
  let component: MyComp5571Component;
  let fixture: ComponentFixture<MyComp5571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

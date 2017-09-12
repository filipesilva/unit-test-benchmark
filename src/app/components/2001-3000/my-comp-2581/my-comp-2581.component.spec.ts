import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2581Component } from './my-comp-2581.component';

describe('MyComp2581Component', () => {
  let component: MyComp2581Component;
  let fixture: ComponentFixture<MyComp2581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

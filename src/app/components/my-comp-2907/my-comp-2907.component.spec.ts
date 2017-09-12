import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2907Component } from './my-comp-2907.component';

describe('MyComp2907Component', () => {
  let component: MyComp2907Component;
  let fixture: ComponentFixture<MyComp2907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2625Component } from './my-comp-2625.component';

describe('MyComp2625Component', () => {
  let component: MyComp2625Component;
  let fixture: ComponentFixture<MyComp2625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

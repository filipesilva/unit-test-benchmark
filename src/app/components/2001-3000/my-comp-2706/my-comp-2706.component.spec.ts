import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2706Component } from './my-comp-2706.component';

describe('MyComp2706Component', () => {
  let component: MyComp2706Component;
  let fixture: ComponentFixture<MyComp2706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

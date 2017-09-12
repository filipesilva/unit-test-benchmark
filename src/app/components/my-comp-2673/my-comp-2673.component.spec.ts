import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2673Component } from './my-comp-2673.component';

describe('MyComp2673Component', () => {
  let component: MyComp2673Component;
  let fixture: ComponentFixture<MyComp2673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

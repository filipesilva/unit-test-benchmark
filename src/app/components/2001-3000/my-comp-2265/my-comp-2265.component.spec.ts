import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2265Component } from './my-comp-2265.component';

describe('MyComp2265Component', () => {
  let component: MyComp2265Component;
  let fixture: ComponentFixture<MyComp2265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

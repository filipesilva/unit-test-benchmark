import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1966Component } from './my-comp-1966.component';

describe('MyComp1966Component', () => {
  let component: MyComp1966Component;
  let fixture: ComponentFixture<MyComp1966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

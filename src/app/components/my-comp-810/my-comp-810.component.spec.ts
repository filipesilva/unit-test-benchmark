import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp810Component } from './my-comp-810.component';

describe('MyComp810Component', () => {
  let component: MyComp810Component;
  let fixture: ComponentFixture<MyComp810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

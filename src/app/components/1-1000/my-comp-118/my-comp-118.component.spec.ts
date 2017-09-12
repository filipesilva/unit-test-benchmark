import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp118Component } from './my-comp-118.component';

describe('MyComp118Component', () => {
  let component: MyComp118Component;
  let fixture: ComponentFixture<MyComp118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

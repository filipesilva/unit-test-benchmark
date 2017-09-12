import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp909Component } from './my-comp-909.component';

describe('MyComp909Component', () => {
  let component: MyComp909Component;
  let fixture: ComponentFixture<MyComp909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

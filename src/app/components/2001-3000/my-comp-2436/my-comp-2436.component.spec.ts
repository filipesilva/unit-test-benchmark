import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2436Component } from './my-comp-2436.component';

describe('MyComp2436Component', () => {
  let component: MyComp2436Component;
  let fixture: ComponentFixture<MyComp2436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

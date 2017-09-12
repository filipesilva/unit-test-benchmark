import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2631Component } from './my-comp-2631.component';

describe('MyComp2631Component', () => {
  let component: MyComp2631Component;
  let fixture: ComponentFixture<MyComp2631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

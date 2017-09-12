import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2568Component } from './my-comp-2568.component';

describe('MyComp2568Component', () => {
  let component: MyComp2568Component;
  let fixture: ComponentFixture<MyComp2568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

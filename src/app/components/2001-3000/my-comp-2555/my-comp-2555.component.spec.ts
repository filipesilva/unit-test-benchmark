import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2555Component } from './my-comp-2555.component';

describe('MyComp2555Component', () => {
  let component: MyComp2555Component;
  let fixture: ComponentFixture<MyComp2555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2759Component } from './my-comp-2759.component';

describe('MyComp2759Component', () => {
  let component: MyComp2759Component;
  let fixture: ComponentFixture<MyComp2759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

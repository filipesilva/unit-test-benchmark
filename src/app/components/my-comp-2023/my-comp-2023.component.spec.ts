import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2023Component } from './my-comp-2023.component';

describe('MyComp2023Component', () => {
  let component: MyComp2023Component;
  let fixture: ComponentFixture<MyComp2023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

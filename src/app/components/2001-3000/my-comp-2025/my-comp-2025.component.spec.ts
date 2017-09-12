import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2025Component } from './my-comp-2025.component';

describe('MyComp2025Component', () => {
  let component: MyComp2025Component;
  let fixture: ComponentFixture<MyComp2025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

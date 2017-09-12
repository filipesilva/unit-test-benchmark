import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2026Component } from './my-comp-2026.component';

describe('MyComp2026Component', () => {
  let component: MyComp2026Component;
  let fixture: ComponentFixture<MyComp2026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

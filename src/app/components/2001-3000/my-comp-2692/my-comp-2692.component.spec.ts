import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2692Component } from './my-comp-2692.component';

describe('MyComp2692Component', () => {
  let component: MyComp2692Component;
  let fixture: ComponentFixture<MyComp2692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

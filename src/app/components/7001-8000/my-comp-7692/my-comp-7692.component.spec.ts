import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7692Component } from './my-comp-7692.component';

describe('MyComp7692Component', () => {
  let component: MyComp7692Component;
  let fixture: ComponentFixture<MyComp7692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

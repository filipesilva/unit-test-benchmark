import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp692Component } from './my-comp-692.component';

describe('MyComp692Component', () => {
  let component: MyComp692Component;
  let fixture: ComponentFixture<MyComp692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

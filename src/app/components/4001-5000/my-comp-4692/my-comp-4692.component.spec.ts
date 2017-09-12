import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4692Component } from './my-comp-4692.component';

describe('MyComp4692Component', () => {
  let component: MyComp4692Component;
  let fixture: ComponentFixture<MyComp4692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5692Component } from './my-comp-5692.component';

describe('MyComp5692Component', () => {
  let component: MyComp5692Component;
  let fixture: ComponentFixture<MyComp5692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

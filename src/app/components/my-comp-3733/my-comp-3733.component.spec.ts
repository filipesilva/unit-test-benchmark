import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3733Component } from './my-comp-3733.component';

describe('MyComp3733Component', () => {
  let component: MyComp3733Component;
  let fixture: ComponentFixture<MyComp3733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

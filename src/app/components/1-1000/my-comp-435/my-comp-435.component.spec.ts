import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp435Component } from './my-comp-435.component';

describe('MyComp435Component', () => {
  let component: MyComp435Component;
  let fixture: ComponentFixture<MyComp435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

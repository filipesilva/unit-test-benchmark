import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7763Component } from './my-comp-7763.component';

describe('MyComp7763Component', () => {
  let component: MyComp7763Component;
  let fixture: ComponentFixture<MyComp7763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3277Component } from './my-comp-3277.component';

describe('MyComp3277Component', () => {
  let component: MyComp3277Component;
  let fixture: ComponentFixture<MyComp3277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

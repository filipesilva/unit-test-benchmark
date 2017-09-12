import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3070Component } from './my-comp-3070.component';

describe('MyComp3070Component', () => {
  let component: MyComp3070Component;
  let fixture: ComponentFixture<MyComp3070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

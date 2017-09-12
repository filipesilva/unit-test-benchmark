import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3575Component } from './my-comp-3575.component';

describe('MyComp3575Component', () => {
  let component: MyComp3575Component;
  let fixture: ComponentFixture<MyComp3575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

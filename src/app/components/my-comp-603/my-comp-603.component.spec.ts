import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp603Component } from './my-comp-603.component';

describe('MyComp603Component', () => {
  let component: MyComp603Component;
  let fixture: ComponentFixture<MyComp603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

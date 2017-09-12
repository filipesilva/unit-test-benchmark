import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9821Component } from './my-comp-9821.component';

describe('MyComp9821Component', () => {
  let component: MyComp9821Component;
  let fixture: ComponentFixture<MyComp9821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

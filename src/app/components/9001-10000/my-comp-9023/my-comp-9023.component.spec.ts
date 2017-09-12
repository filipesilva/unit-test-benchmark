import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9023Component } from './my-comp-9023.component';

describe('MyComp9023Component', () => {
  let component: MyComp9023Component;
  let fixture: ComponentFixture<MyComp9023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

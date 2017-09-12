import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9577Component } from './my-comp-9577.component';

describe('MyComp9577Component', () => {
  let component: MyComp9577Component;
  let fixture: ComponentFixture<MyComp9577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

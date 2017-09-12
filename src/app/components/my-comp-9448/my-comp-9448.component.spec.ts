import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9448Component } from './my-comp-9448.component';

describe('MyComp9448Component', () => {
  let component: MyComp9448Component;
  let fixture: ComponentFixture<MyComp9448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

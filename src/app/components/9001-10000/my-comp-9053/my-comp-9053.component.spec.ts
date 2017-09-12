import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9053Component } from './my-comp-9053.component';

describe('MyComp9053Component', () => {
  let component: MyComp9053Component;
  let fixture: ComponentFixture<MyComp9053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

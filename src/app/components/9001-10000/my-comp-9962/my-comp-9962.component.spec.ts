import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9962Component } from './my-comp-9962.component';

describe('MyComp9962Component', () => {
  let component: MyComp9962Component;
  let fixture: ComponentFixture<MyComp9962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

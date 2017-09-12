import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9554Component } from './my-comp-9554.component';

describe('MyComp9554Component', () => {
  let component: MyComp9554Component;
  let fixture: ComponentFixture<MyComp9554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

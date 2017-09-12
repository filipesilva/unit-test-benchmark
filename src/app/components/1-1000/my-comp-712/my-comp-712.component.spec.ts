import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp712Component } from './my-comp-712.component';

describe('MyComp712Component', () => {
  let component: MyComp712Component;
  let fixture: ComponentFixture<MyComp712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

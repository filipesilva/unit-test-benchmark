import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9713Component } from './my-comp-9713.component';

describe('MyComp9713Component', () => {
  let component: MyComp9713Component;
  let fixture: ComponentFixture<MyComp9713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

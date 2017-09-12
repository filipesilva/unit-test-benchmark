import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp853Component } from './my-comp-853.component';

describe('MyComp853Component', () => {
  let component: MyComp853Component;
  let fixture: ComponentFixture<MyComp853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

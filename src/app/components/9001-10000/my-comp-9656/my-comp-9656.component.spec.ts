import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9656Component } from './my-comp-9656.component';

describe('MyComp9656Component', () => {
  let component: MyComp9656Component;
  let fixture: ComponentFixture<MyComp9656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

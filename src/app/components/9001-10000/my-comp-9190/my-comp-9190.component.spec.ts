import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9190Component } from './my-comp-9190.component';

describe('MyComp9190Component', () => {
  let component: MyComp9190Component;
  let fixture: ComponentFixture<MyComp9190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

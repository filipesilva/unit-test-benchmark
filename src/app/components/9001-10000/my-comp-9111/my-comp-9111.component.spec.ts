import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9111Component } from './my-comp-9111.component';

describe('MyComp9111Component', () => {
  let component: MyComp9111Component;
  let fixture: ComponentFixture<MyComp9111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

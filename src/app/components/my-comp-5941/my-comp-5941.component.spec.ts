import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5941Component } from './my-comp-5941.component';

describe('MyComp5941Component', () => {
  let component: MyComp5941Component;
  let fixture: ComponentFixture<MyComp5941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

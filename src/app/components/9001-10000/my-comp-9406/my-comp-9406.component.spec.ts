import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9406Component } from './my-comp-9406.component';

describe('MyComp9406Component', () => {
  let component: MyComp9406Component;
  let fixture: ComponentFixture<MyComp9406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

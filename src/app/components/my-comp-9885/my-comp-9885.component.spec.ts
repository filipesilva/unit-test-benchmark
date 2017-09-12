import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9885Component } from './my-comp-9885.component';

describe('MyComp9885Component', () => {
  let component: MyComp9885Component;
  let fixture: ComponentFixture<MyComp9885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

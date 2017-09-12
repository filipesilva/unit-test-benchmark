import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9153Component } from './my-comp-9153.component';

describe('MyComp9153Component', () => {
  let component: MyComp9153Component;
  let fixture: ComponentFixture<MyComp9153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

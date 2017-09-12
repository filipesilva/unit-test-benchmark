import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp551Component } from './my-comp-551.component';

describe('MyComp551Component', () => {
  let component: MyComp551Component;
  let fixture: ComponentFixture<MyComp551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

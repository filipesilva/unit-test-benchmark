import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5841Component } from './my-comp-5841.component';

describe('MyComp5841Component', () => {
  let component: MyComp5841Component;
  let fixture: ComponentFixture<MyComp5841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

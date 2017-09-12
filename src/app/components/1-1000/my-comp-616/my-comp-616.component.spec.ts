import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp616Component } from './my-comp-616.component';

describe('MyComp616Component', () => {
  let component: MyComp616Component;
  let fixture: ComponentFixture<MyComp616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp399Component } from './my-comp-399.component';

describe('MyComp399Component', () => {
  let component: MyComp399Component;
  let fixture: ComponentFixture<MyComp399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

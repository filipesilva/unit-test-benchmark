import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5170Component } from './my-comp-5170.component';

describe('MyComp5170Component', () => {
  let component: MyComp5170Component;
  let fixture: ComponentFixture<MyComp5170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

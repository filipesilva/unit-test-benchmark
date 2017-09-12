import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9992Component } from './my-comp-9992.component';

describe('MyComp9992Component', () => {
  let component: MyComp9992Component;
  let fixture: ComponentFixture<MyComp9992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

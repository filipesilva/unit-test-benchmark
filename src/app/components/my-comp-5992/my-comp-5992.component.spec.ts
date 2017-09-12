import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5992Component } from './my-comp-5992.component';

describe('MyComp5992Component', () => {
  let component: MyComp5992Component;
  let fixture: ComponentFixture<MyComp5992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

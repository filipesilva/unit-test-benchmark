import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6862Component } from './my-comp-6862.component';

describe('MyComp6862Component', () => {
  let component: MyComp6862Component;
  let fixture: ComponentFixture<MyComp6862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

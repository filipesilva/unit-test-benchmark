import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6224Component } from './my-comp-6224.component';

describe('MyComp6224Component', () => {
  let component: MyComp6224Component;
  let fixture: ComponentFixture<MyComp6224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

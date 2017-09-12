import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6392Component } from './my-comp-6392.component';

describe('MyComp6392Component', () => {
  let component: MyComp6392Component;
  let fixture: ComponentFixture<MyComp6392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

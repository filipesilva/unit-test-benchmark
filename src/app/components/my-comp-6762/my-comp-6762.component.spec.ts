import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6762Component } from './my-comp-6762.component';

describe('MyComp6762Component', () => {
  let component: MyComp6762Component;
  let fixture: ComponentFixture<MyComp6762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

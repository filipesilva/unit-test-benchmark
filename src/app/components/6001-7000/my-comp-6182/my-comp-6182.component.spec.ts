import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6182Component } from './my-comp-6182.component';

describe('MyComp6182Component', () => {
  let component: MyComp6182Component;
  let fixture: ComponentFixture<MyComp6182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

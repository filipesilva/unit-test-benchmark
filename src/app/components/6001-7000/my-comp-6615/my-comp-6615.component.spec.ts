import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6615Component } from './my-comp-6615.component';

describe('MyComp6615Component', () => {
  let component: MyComp6615Component;
  let fixture: ComponentFixture<MyComp6615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

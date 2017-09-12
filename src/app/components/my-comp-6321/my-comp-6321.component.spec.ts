import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6321Component } from './my-comp-6321.component';

describe('MyComp6321Component', () => {
  let component: MyComp6321Component;
  let fixture: ComponentFixture<MyComp6321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

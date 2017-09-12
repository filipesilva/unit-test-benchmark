import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6529Component } from './my-comp-6529.component';

describe('MyComp6529Component', () => {
  let component: MyComp6529Component;
  let fixture: ComponentFixture<MyComp6529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

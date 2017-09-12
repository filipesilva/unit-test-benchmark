import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6922Component } from './my-comp-6922.component';

describe('MyComp6922Component', () => {
  let component: MyComp6922Component;
  let fixture: ComponentFixture<MyComp6922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

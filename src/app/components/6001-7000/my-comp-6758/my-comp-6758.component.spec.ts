import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6758Component } from './my-comp-6758.component';

describe('MyComp6758Component', () => {
  let component: MyComp6758Component;
  let fixture: ComponentFixture<MyComp6758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6337Component } from './my-comp-6337.component';

describe('MyComp6337Component', () => {
  let component: MyComp6337Component;
  let fixture: ComponentFixture<MyComp6337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

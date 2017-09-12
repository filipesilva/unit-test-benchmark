import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6308Component } from './my-comp-6308.component';

describe('MyComp6308Component', () => {
  let component: MyComp6308Component;
  let fixture: ComponentFixture<MyComp6308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

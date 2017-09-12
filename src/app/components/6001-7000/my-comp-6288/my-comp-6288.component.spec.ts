import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6288Component } from './my-comp-6288.component';

describe('MyComp6288Component', () => {
  let component: MyComp6288Component;
  let fixture: ComponentFixture<MyComp6288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

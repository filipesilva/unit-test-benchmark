import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7864Component } from './my-comp-7864.component';

describe('MyComp7864Component', () => {
  let component: MyComp7864Component;
  let fixture: ComponentFixture<MyComp7864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

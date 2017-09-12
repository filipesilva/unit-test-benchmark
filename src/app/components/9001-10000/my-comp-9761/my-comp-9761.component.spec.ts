import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9761Component } from './my-comp-9761.component';

describe('MyComp9761Component', () => {
  let component: MyComp9761Component;
  let fixture: ComponentFixture<MyComp9761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4757Component } from './my-comp-4757.component';

describe('MyComp4757Component', () => {
  let component: MyComp4757Component;
  let fixture: ComponentFixture<MyComp4757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

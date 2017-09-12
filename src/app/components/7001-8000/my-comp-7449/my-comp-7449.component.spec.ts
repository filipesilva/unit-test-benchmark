import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7449Component } from './my-comp-7449.component';

describe('MyComp7449Component', () => {
  let component: MyComp7449Component;
  let fixture: ComponentFixture<MyComp7449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

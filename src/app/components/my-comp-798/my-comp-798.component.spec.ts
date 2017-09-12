import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp798Component } from './my-comp-798.component';

describe('MyComp798Component', () => {
  let component: MyComp798Component;
  let fixture: ComponentFixture<MyComp798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

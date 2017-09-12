import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp620Component } from './my-comp-620.component';

describe('MyComp620Component', () => {
  let component: MyComp620Component;
  let fixture: ComponentFixture<MyComp620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

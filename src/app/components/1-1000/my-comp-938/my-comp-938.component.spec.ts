import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp938Component } from './my-comp-938.component';

describe('MyComp938Component', () => {
  let component: MyComp938Component;
  let fixture: ComponentFixture<MyComp938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

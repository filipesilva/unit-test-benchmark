import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1952Component } from './my-comp-1952.component';

describe('MyComp1952Component', () => {
  let component: MyComp1952Component;
  let fixture: ComponentFixture<MyComp1952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

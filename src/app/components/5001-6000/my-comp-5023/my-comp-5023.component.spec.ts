import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5023Component } from './my-comp-5023.component';

describe('MyComp5023Component', () => {
  let component: MyComp5023Component;
  let fixture: ComponentFixture<MyComp5023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

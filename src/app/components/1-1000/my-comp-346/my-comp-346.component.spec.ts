import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp346Component } from './my-comp-346.component';

describe('MyComp346Component', () => {
  let component: MyComp346Component;
  let fixture: ComponentFixture<MyComp346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

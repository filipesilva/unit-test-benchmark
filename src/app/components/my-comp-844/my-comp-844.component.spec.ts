import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp844Component } from './my-comp-844.component';

describe('MyComp844Component', () => {
  let component: MyComp844Component;
  let fixture: ComponentFixture<MyComp844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

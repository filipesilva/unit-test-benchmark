import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp882Component } from './my-comp-882.component';

describe('MyComp882Component', () => {
  let component: MyComp882Component;
  let fixture: ComponentFixture<MyComp882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

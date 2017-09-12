import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp272Component } from './my-comp-272.component';

describe('MyComp272Component', () => {
  let component: MyComp272Component;
  let fixture: ComponentFixture<MyComp272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

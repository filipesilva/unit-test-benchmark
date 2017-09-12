import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp660Component } from './my-comp-660.component';

describe('MyComp660Component', () => {
  let component: MyComp660Component;
  let fixture: ComponentFixture<MyComp660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4506Component } from './my-comp-4506.component';

describe('MyComp4506Component', () => {
  let component: MyComp4506Component;
  let fixture: ComponentFixture<MyComp4506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

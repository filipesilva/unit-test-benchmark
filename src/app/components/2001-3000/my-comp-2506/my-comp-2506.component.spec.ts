import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2506Component } from './my-comp-2506.component';

describe('MyComp2506Component', () => {
  let component: MyComp2506Component;
  let fixture: ComponentFixture<MyComp2506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

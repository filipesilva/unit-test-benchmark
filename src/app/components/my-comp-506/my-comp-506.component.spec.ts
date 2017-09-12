import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp506Component } from './my-comp-506.component';

describe('MyComp506Component', () => {
  let component: MyComp506Component;
  let fixture: ComponentFixture<MyComp506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

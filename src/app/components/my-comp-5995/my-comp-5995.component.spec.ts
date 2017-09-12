import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5995Component } from './my-comp-5995.component';

describe('MyComp5995Component', () => {
  let component: MyComp5995Component;
  let fixture: ComponentFixture<MyComp5995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

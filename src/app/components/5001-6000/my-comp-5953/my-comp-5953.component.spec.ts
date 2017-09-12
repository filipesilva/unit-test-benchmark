import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5953Component } from './my-comp-5953.component';

describe('MyComp5953Component', () => {
  let component: MyComp5953Component;
  let fixture: ComponentFixture<MyComp5953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

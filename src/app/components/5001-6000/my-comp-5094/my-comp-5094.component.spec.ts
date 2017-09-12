import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5094Component } from './my-comp-5094.component';

describe('MyComp5094Component', () => {
  let component: MyComp5094Component;
  let fixture: ComponentFixture<MyComp5094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

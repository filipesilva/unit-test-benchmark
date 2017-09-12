import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5231Component } from './my-comp-5231.component';

describe('MyComp5231Component', () => {
  let component: MyComp5231Component;
  let fixture: ComponentFixture<MyComp5231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

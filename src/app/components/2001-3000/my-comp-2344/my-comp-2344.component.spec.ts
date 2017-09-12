import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2344Component } from './my-comp-2344.component';

describe('MyComp2344Component', () => {
  let component: MyComp2344Component;
  let fixture: ComponentFixture<MyComp2344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

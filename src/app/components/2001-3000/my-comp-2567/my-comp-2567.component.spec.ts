import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2567Component } from './my-comp-2567.component';

describe('MyComp2567Component', () => {
  let component: MyComp2567Component;
  let fixture: ComponentFixture<MyComp2567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

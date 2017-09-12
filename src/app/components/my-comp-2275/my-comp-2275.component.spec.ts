import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2275Component } from './my-comp-2275.component';

describe('MyComp2275Component', () => {
  let component: MyComp2275Component;
  let fixture: ComponentFixture<MyComp2275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

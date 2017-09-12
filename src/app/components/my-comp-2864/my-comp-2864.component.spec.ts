import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2864Component } from './my-comp-2864.component';

describe('MyComp2864Component', () => {
  let component: MyComp2864Component;
  let fixture: ComponentFixture<MyComp2864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

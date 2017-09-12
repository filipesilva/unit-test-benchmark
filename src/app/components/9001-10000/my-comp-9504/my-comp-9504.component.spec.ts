import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9504Component } from './my-comp-9504.component';

describe('MyComp9504Component', () => {
  let component: MyComp9504Component;
  let fixture: ComponentFixture<MyComp9504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
